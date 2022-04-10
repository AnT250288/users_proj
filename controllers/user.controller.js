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
        const {id, name} = request.params
        const newUser = service.createUser(id, name)
        response
            .status(200)
            .send(newUser)
    }
    renameUser = (request, response) => {
        const {id, name} = request.params
        const updatedUser = service.changeName(id, name)
        response
            .status(200)
            .send(updatedUser)
    }
    deleteById = (req, res) => {
        res
            .status(200)
            .send(service.removeUser(req.params.id))
    }

}

export let userController = new UserController()









