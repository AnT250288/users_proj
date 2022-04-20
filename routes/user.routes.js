import {Router} from "express";
import {userController} from "../controllers/user.controller.js";
import {authenticateToken} from "../middleware/auth.js";
import {validate} from "../middleware/validation_schema.js";
import {uploadFile} from "../middleware/upload.js";

const router = Router()

router
    .get('/', userController.getAll)
    .get('/:id', userController.getOneUserById)
    .post('/' ,validate(), userController.createNewUser)
    .put('/:id', authenticateToken, validate(), userController.renameUser)
    .delete('/:id', authenticateToken, userController.deleteById)
    .post('/registration', userController.registrationUser)
    .post('/login', userController.loginUser)
    .post('/upload', uploadFile, userController.uploadedFile)


export default router