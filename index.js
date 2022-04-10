import serverRoutes from "./routes/user.routes.js";
import express from "express";


const app = express()

app.use('/users', serverRoutes)

app.use(function (request, response, next){
    response.status(404).send("Not found")
})


app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`)
})