import {service} from "../services/user.service.js";

class UserController {
    getAll = (request, response) => {
        service.getAllUsers().then(users => response.json(users))
    }

    getOneUserById = (request, response) => {
        service.getOneUser(request.params.id)
            .then(user => {
                if (!user) {
                    response.status(404)
                        .send(`No user with id: ${request.params.id}`)
                } else {
                    console.log(user)
                    response.json(user)
                }
            }).catch(err => console.log(err))
    }

    createNewUser = async (request, response) => {
        service.createUser(request.body)
        response.send("User was created!")
    }

    renameUser = (request, response) => {
        response.send(service.changeName(request.body, request.body.id, request.body.email, request.body.password))
    }

    deleteById = (request, response) => {
        response.send(service.removeUser(request.params.id))
    }

    async registrationUser(request, response) {
        const {email} = request.body
        const alreadyExist = await service.getByEmail(email).catch(
            (error) => {
                console.log(error)
            }
        )
        if (alreadyExist) {
            return response.json("User with that email already exist")
        } else {
            service.createUser(request.body)
            response.send("User was successfully registered!")
        }
    }

    async loginUser(request, response) {
        const {id, email, password} = request.body
        const user = await service.getByEmail(email).catch(
            (error) => {
                console.log(error)
            }
        )
        console.log(request.body.email)
        if (!user)
            return response.json("Email or password doesn't match!")

        if (user.password !== password)
            return response.json("Password doesn't match!")
        const jwtToken = await service.generateAccessToken(id, email)
        response.json({message: "Welcome back", token: jwtToken})
    }
}

export let userController = new UserController()

