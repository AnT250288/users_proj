import serverRoutes from "./routes/user.routes.js";
import express from "express";
import {sequelize} from "./connections/connection.js";
import bodyParser from "body-parser";


const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

app.use('/user', serverRoutes)
//app.use(multer({storage: storageConfig, fileFilter: fileFilter}).single('JS'))

app.use(function (request, response, next) {
    response.status(404).send("Not found")
})

sequelize.sync()
    .then(() => {
        app.listen(8080, () => {
            console.log(`Server running at http://localhost:8080`)
        })
    })





