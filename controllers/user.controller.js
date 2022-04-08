import {service} from "../services/user.service.js";


class UserController {
    getAll = (request, response) => {
        response
            .status(200)
            .send(service.getAllUsers())
    }
    getOne = (request, response) => {

        response
            .status(200)
            .send(service.getOneUser(request.params.id))
    }
    createNewUser = (request, response) => {
        let body = ''
        response
            .status(200)
            .send(service.createUser(request)

    }
    renameUser = (request, response) => {
        let user = ''
        response
            .status(200)
            .send(service.changeName(request
                .on('data', chunk => {
                    user += chunk
                })
                .on('end', () => {
                    data = JSON.parse(user)
                })
            ))
    }
    deleteById = (req, res) => {
        res
            .status(200)
            .send(service.removeUser(req.params.id))
    }

}

export let userController = new UserController()









