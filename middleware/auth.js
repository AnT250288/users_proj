import jwt from "jsonwebtoken";
import {secret} from "../config.js";


export const authenticateToken = async (request, response, next) => {
    const [strategy, token] = request.header('Authorization').split(' ')
    const result = jwt.verify(token, secret)
    result.email = request.email
    next();
}

/*export const signIn = async (login, password) => {
    let user
    const  isLogin = bcrypt.compareSync(password, user.password)

    if (isLogin) {
        const token = jwt.sign(user.id, secret)
        return ({user, token})
    }
}*/



/*
export const authenticateToken = async (request, response, next) => {
    const token = request.headers.authorization.split(' ')[1]
    if(!token) {
        return response.status(400).json('User is not authorized!')
    }
    const decodedData = jwt.verify(token, secret)
    request.user = decodedData
    next()
}*/
