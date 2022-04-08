import {users} from "../users.js";

let data = users

class UserService {

    getAllUsers = () => {
        console.log(JSON.stringify(data))
        return JSON.stringify(data)
    }

    getOneUser = (id) => {

        return data.find(el => el.id === id)
    }

    createUser = (id, name) => {
        return data.push({id: id, name: name})
        /*return [...data, {id: id, name: name}]*/
    }

    changeName = (id, name) => {
        return JSON.stringify(data.map(el => el.id === id ? [...el, name] : el))
    }
    removeUser = (id) => {
        return JSON.stringify(data.filter(el => el.id != id))
    }

}

let userService = new UserService()
userService.getAllUsers()

export let service = new UserService()