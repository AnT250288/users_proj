import {User} from "../model/users.js";
import jwt from "jsonwebtoken";
import {secret} from "../config.js";
import bcrypt from "bcrypt";

class UserService {

    getAllUsers = () => {
        return User.findAll({
            attributes: ["id", 'name', 'age', 'email', 'password']
        })
    }

    getOneUser = (id) => {
        return User.findByPk(id, {attributes: ["id", 'name', 'age', 'email', 'password']})
    }

    getByEmail = (email) => User.findOne({
        where: {email}
    })

    createUser = (user) => {
        user.password = bcrypt.hashSync(user.password, 4)
        User.create(user, {
            id: user.id,
            name: user.name,
            age: user.age,
            email: user.email,
            password: user.password,
        })
    }

    changeName = (user, key) => {
        User.update(user, {
            where: {id: key}
        })
        return `User with id: ${key} was updated!`
    }

    removeUser = (id) => {
        User.destroy({
            where: {
                id: id
            }
        }).then(r => r = "User was removed!")
        return "User was removed!"
    }

    generateAccessToken = (id, email) => {
        const payload = {
            id,
            email,
        }
        return jwt.sign(payload, secret, {expiresIn: 24})
    }

}

const userServ = new UserService()
//userServ.createUser({id: 3, name: "Ivan", age: 55, email: "a2@email.com", password: "password"})
export let service = new UserService()