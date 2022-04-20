import Joi from "joi"

const validateSchema = Joi.object({
    login: Joi.string().min(3).max(20).required(),
    password: Joi.string().alphanum(),
    name: Joi.string().pattern(new RegExp('^[a-zA-Z]{3,50}$')),
    id: Joi.number(),
})


export const validate = () => async (request, response, next) => {
    try {
        await validateSchema.validateAsync(request.body)
        next()
    } catch (error) {
        response.status(400).send(error.details)
    }
}
