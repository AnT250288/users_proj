import {users} from "../users.js";

let data = users

class UserService {

    getAllUsers = () => {
        console.log(JSON.stringify(data))
        return JSON.stringify(data)
    }

    getOneUser = (id) => {
        console.log(data.find(el => el.id === id))
        return JSON.stringify(data.find(el => el.id === id))
    }

    createUser = (id, name) => {
        data.push({id, name})
        /*[...data, {id, name}]*/
        console.log(id, name)
        return JSON.stringify({id, name})
    }

    changeName = (id, name) => {
        console.log(id, name)
        return JSON.stringify(data.map(el => el.id === id ? [...data, name] : el))
    }
    removeUser = (id) => {
        return JSON.stringify(data.filter(el => el.id != id))
    }

}

let userService = new UserService()
userService.createUser(8, 'cjsjc')

export let service = new UserService()