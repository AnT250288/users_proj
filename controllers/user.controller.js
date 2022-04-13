import {service} from "../services/user.service.js";
import {User} from "../users.js";
import bodyParser from "body-parser";

class UserController {
    getAll = (request, response) => {
        service.getAllUsers().then(users => response.json(users))
        /* response
            .status(200)
            .send(service.getAllUsers())*/
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
        /*  let body
          request.on('data', res => {
              body = JSON.parse(res)
          })
          console.log(body)*/
        console.log(request)
        User.create({
            name: request.body.name,
            age: request.body.age
        }).then(res => {
            const user = {id: res.id, name: res.name, age: res.age}
            console.log(user);
        }).catch(err => console.log(err));


        /*User.create({name: request.body.name, age: request.body.age})
            .then(res => {
                response.send({name: res.name, age: res.age})
            })*/

        /*let {id, name, age} = request.body
        User.create({id, name, age})
            .then((user) => {
                return response
                    .status(200)
                    .json(user)
            })*/
        /*return User.create({name: request.body.name, age: request.body.age})
            .then(user => response.status(200).send(user))*/


        /*.then(res => {
            const user = {id: res.id, name: res.name, age: res.age}
            console.log(user);
        }).catch(err => console.log(err));*/

    }

    renameUser = (request, response) => {
        /*let body
        request.on('data', response => {
            body = JSON.parse(response)
        })
        request.on('end', () => {
            response
                .status(200)
                .send(service.changeName(request.params.id, body))
        })*/
        const id = request.params.id
        response.send(service.changeName(id))

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
