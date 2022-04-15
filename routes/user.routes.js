import {Router} from "express";
import {userController} from "../controllers/user.controller.js";


const router = Router()

router
    .get('/', userController.getAll)
    .get('/:id', userController.getOneUserById)
    .post('/', userController.createNewUser)
    .put('/:id', userController.renameUser)
    .delete('/:id', userController.deleteById)

    .post('/registration',userController.registrationUser)
    .post('/login', userController.loginUser)

export default router