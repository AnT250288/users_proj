import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {User} from "../model/users.js";

class UserService {

    getAllUsers = async () => {
        return User.find()
    }

    getOneUser = (id) => {
        return User.findById(id)
    }

    getByLogin = (login) => User.findOne({
        login: login
    })

    createUser = (user) => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync())
        return new User(user).save();

    }

    changeName = (id, {name, login, password}) => {
        password = bcrypt.hashSync(password, bcrypt.genSaltSync())
        return User.findOneAndUpdate({_id: id},
            {$set: {"name": name, "login": login, "password": password}},
            {returnOriginal: false})
    }

    removeUser = (id) => {
        return User.deleteOne({_id: id})
    }

    generateAccessToken = (id, login) => {
        const payload = {
            id,
            login,
        }
        return jwt.sign(payload, "secret", {expiresIn: '24h'})
    }

}

export let service = new UserService()