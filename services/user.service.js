import {users} from "../users.js";

let data = users

class UserService {

    getAllUsers = () => {
        console.log(JSON.stringify(data))
        return data
    }

    getOneUser = (id) => {
        return data.find(el => el.id === id)
    }

    createUser = (user) => {
        data.push(user)
        return JSON.stringify(data)
    }

    changeName = (id, name) => {
        for (let i in data) {
            if (data[i].id == id) {
                console.log(i.name)
                data[i] = name
            }
        }
        return JSON.stringify(data)
        /*return JSON.stringify(data.map(el => el.id === id ? [...data, name] : el))*/
    }

    removeUser = (id) => {
        return data = JSON.stringify(data.filter(el => el.id != id))
    }
}

export let service = new UserService()