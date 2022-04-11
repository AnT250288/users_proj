import {service} from "../services/user.service.js";

class UserController {
    getAll = (request, response) => {
        response
            .status(200)
            .send(service.getAllUsers())
    }
    getOneUserById = (request, response) => {
        response
            .status(200)
            .send(service.getOneUser(request.params.id))
    }

    createNewUser = (request, response) => {
        let body
        request.on('data', res => {
            body = JSON.parse(res)
        })
        request.on('end', () => {
            response
                .status(200)
                .send(service.createUser(body))
        })

    }

    renameUser = (request, response) => {
        let body
        request.on('data', response => {
            body = JSON.parse(response)
        })
        request.on('end', () => {
            response
                .status(200)
                .send(service.changeName(request.params.id, body))
        })


    }


    deleteById = (request, response) => {
        response
            .status(200)
            .send(service.removeUser(request.params.id))
    }

}

export let userController = new UserController()
