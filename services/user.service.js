import {User} from "../users.js";

class UserService {

    getAllUsers = () => {
        /*console.log(JSON.stringify(User))*/
        let user = User.findAll()
        return user
    }

    getOneUser = (id) => {
        return User.findByPk(id)
    }

    /*createUser = (name, age) => {
        User.create({
            name, age
        })
    }*/

    changeName = (id, name) => {
        /*for (let i in User) {
            if (User[i].id == id) {
                console.log(i.name)
                User[i] = name
            }
        }
        return JSON.stringify(User)*/
        return User.update({
            where: {
                id: id
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
/*userServ.createUser()*/
/*userServ.removeUser(4)*/


export let service = new UserService()