import serverRoutes from "./routes/user.routes.js";
import express from "express";
import {sequelize} from "./connections/connection.js";

const app = express()


app.use('/user', serverRoutes)
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use(function (request, response, next) {
    response.status(404).send("Not found")
})

sequelize.sync()
    .then(() => {
        app.listen(8080, () => {
            console.log(`Server running at http://localhost:3000`)
        })
    })





