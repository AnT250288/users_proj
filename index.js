import serverRoutes from "./routes/user.routes.js";
import express from "express";


const app = express()

app.use('/', serverRoutes)


app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`)
})