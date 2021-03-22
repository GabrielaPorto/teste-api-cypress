import Joi from '@hapi/joi';

const usuariosSchema = Joi.object({
    name: Joi.string(),
    gender: Joi.string(),
    email: Joi.string(),
    status: Joi.string(),
    id: Joi.number(),
    created_at: Joi.date(),
    updated_at: Joi.date()
})

export default usuariosSchema;