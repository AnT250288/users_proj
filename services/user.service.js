import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {User} from "../model/users.js";

class UserService {

    /*getAllUsers = () => {
        return User.findAll({
            attributes: ["id", 'name', 'age', 'email', 'password']
        })
    }*/
    getAllUsers = async () => {
        return User.find()
    }

    getOneUser = (id) => {
        /*return User.findByPk(id, {attributes: ["id", 'name', 'age', 'email', 'password']})*/
        return User.findById(id)
    }

    getByLogin = (login) => User.findOne({
        login: login
        /* where: {email}*/
    })

    createUser = (user) => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync())
        /*  User.create(user, {
            id: user.id,
            name: user.name,
            age: user.age,
            email: user.email,
            password: user.password,
        })*/
        return new User(user).save();

    }

    /* changeName = (user, id) => {
         //user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync())
         /!* User.update(user, {
              where: {id: key}
          })
          return `User with id: ${key} was updated!`*!/

         return User.updateOne({_id: id},
             {user},
         )

         console.log(name)

         //user.save()
         //return `User with id: ${id} was updated!`
     }*/

    changeName = (id, {name, login, password}) => {
        password = bcrypt.hashSync(password, bcrypt.genSaltSync())
        return User.findOneAndUpdate({_id: id},
            {$set: {"name": name, "login": login, "password": password}},
            {returnOriginal: false})
    }


    removeUser = (id) => {
        /*User.destroy({
            where: {
                id: id
            }
        }).then(r => r = "User was removed!")
        return "User was removed!"*/

    return User.deleteOne({_id:id})
    }

    generateAccessToken = (id, login) => {
        const payload = {
            id,
            login,
        }
        return jwt.sign(payload, "secret", {expiresIn: '24h'})
    }

}

const userServ = new UserService()
//userServ.createUser({id: 3, name: "Ivan", age: 55, email: "a2@email.com", password: "password"})
export let service = new UserService()