import {Router} from "express";
import {userController} from "../controllers/user.controller.js";


const router = Router()

router
    .get('/', userController.getAll)
    .get('/:id', userController.getOneUserById)
    .post('/', userController.createNewUser)
    .put('/', userController.renameUser)
    .delete('/:id', userController.deleteById)

export default router