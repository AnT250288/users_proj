import {service} from "../services/user.service.js";

class UserController {
    getAll = (request, response) => {
        service.getAllUsers().then(users => response.json(users))
    }

    uploadedFile = async (request, response, next) => {
        const file = request.file
        if (!file) {
            const error = new Error('Please upload a file')
            error.httpStatusCode = 400
            return next("hey error")
        }

        response.json("Image was added")
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

    renameUser = async (request, response) => {
        let result = await service.changeName(request.params.id, {
            name: request.body.name,
            login: request.body.login,
            password: request.body.password
        })
        if (result)
            response.status(200).json({message: `User with id: ${request.params.id} updated`});
        else
            response.status(400).json({message: `No user with such key ${request.params.id}`});
    }

    deleteById = async (request, response) => {
        response.send(await service.removeUser(request.params.id))
    }

    async registrationUser(request, response) {
        const {login} = request.body
        const alreadyExist = await service.getByLogin(login).catch(
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
        const {id, login, password} = request.body
        const user = await service.getByLogin(login).catch(
            (error) => {
                console.log(error)
            }
        )
        console.log(request.body.login)
        if (!user)
            return response.json("Login or password doesn't match!")

        if (user.password !== password)
            return response.json("Password doesn't match!")
        const jwtToken = await service.generateAccessToken(id, login)
        response.json({message: "Welcome back", token: jwtToken})
    }
}

export let userController = new UserController()

