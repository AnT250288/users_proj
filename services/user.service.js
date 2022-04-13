import {User} from "../users.js";

class UserService {

    getAllUsers = () => {
        let user = User.findAll({
            attributes: ["id", 'name', 'age']
        })
        return user
    }

    getOneUser = (id) => {
        return User.findByPk(id, {attributes: ["id", 'name', 'age']})
    }

    createUser = (user) => {
        User.create(user, {
            name: user.name,
            age: user.age,
        })
    }

    changeName = (user, key) => {
        return User.update(user, {
            where: {
                id: key
            }
        })
    }

    removeUser = (id) => {
        return User.destroy({
            where: {
                id: id
            }
        })
    }
}

const userServ = new UserService()

export let service = new UserService()