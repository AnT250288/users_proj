import serverRoutes from "./routes/user.routes.js";
import express from "express";
import {connect} from "./connections/connection.js";
import bodyParser from "body-parser";


const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

app.use('/user', serverRoutes)

app.use(function (request, response, next) {
    response.status(404).send("Not found")
})

connect.then(() => {
        app.listen(8080, () => {
            console.log(`Server running at http://localhost:8080`)
        })
    })





