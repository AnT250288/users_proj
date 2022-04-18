/*
import Joi from "joi"

const validateSchema = Joi.object({
    login: Joi.string().min(3).max(20).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z]{3,30}$'))
})

const validate = (userSchema) => async (request, response, next) => {
    try {
        await userSchema.validateAsync(request.body)
        next()
    } catch (error){
        response.status(400).send(error.details)
    }
}*/
