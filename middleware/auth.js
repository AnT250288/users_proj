import jwt from "jsonwebtoken";

/*export const authenticateToken = async (request, response, next) => {
    const [strategy, token] = request.headers.authorization.split(' ')[1]
    const result = jwt.verify(token, "secret")
    console.log(request.body)
    result.email = request.email
    try {
        next();
    } catch (err) {
        return response.json(err)
    }
}*/

export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, 'secret', (err, user) => {
        console.log(err)
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}




