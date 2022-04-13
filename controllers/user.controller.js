import {service} from "../services/user.service.js";
import {User} from "../users.js";
import bodyParser from "body-parser";

class UserController {
    getAll = (request, response) => {
        service.getAllUsers().then(users => response.json(users))
    }
    getOneUserById = (request, response) => {
        service.getOneUser(request.params.id)
            .then(user => {
                if (!user) {
                    return `There is no user with that ${request.params.id}`
                } else {
                    response.json(user)
                }
            }).catch(err => console.log(err))
    }

    createNewUser = (request, response) => {
        /*let body
        request.on('data', res => {
            body = JSON.parse(res)
        })
         request.on('end', () => {
             response
                 .status(200)
                 .send(service.createUser(body))
         })*/
        let body
        request.on('data', res => {
            body = JSON.parse(res)
            console.log(body)
        })
        request.on('end', () => {
            response.send(service.createUser(body))
        })
    }

    renameUser = (request, response) => {
        console.log(request.body)
        response.send(service.changeName(request.body, request.body.id))
    }

    deleteById = (request, response) => {
        response
            .status(200)
            .send(service.removeUser(request.params.id))
            .send("User was deleted")
    }

}

export let
    userController = new UserController()
