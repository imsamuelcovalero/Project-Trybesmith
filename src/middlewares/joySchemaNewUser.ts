import Joi from 'joi';

const newUserSchema = Joi.object({
  username: Joi.string().required().min(3).messages({
    'any.required': '400|"username" is required',
    'string.base': '422|"username" must be a string',
    'string.min': '422|"username" length must be at least 3 characters long',
  }),
  classe: Joi.string().required().min(3).messages({
    'any.required': '400|"classe" is required',
    'string.base': '422|"classe" must be a string',
    'string.min': '422|"classe" length must be at least 3 characters long',
  }),
  level: Joi.number().required().min(1).messages({
    'any.required': '400|"level" is required',
    'number.base': '422|"level" must be a number',
    'number.min': '422|"level" must be greater than or equal to 1',
  }),
  password: Joi.string().required().min(8).messages({
    'any.required': '400|"password" is required',
    'string.base': '422|"password" must be a string',
    'string.min': '422|"password" length must be at least 8 characters long',
  }),
});

export default newUserSchema;