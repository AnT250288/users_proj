import {Router} from "express";
import {userController} from "../controllers/user.controller.js";
import {authenticateToken} from "../middleware/auth.js";

const router = Router()

router
    .get('/', userController.getAll)
    .get('/:id', userController.getOneUserById)
    .post('/', userController.createNewUser)
    .put('/:id', authenticateToken, userController.renameUser)
    .delete('/:id', authenticateToken, userController.deleteById)
    .post('/registration', userController.registrationUser)
    .post('/login', userController.loginUser)



export default router