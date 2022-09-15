import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import CustomError from '../errors/CustomError';
import newUserSchema from './joySchemaNewUser';

const validators = {
  validateLogin(req: Request, _res: Response, next: NextFunction) {
    const schema = Joi.object({
      username: Joi.string().required().messages({ 'string.empty': '400|"username" is required' }),
      password: Joi.string().required().messages({ 'string.empty': 'xabla/"password"is required' }),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      console.log('erro', error.message);
      const { message } = error;
      // const [status, message] = error.message.split('|');
      throw new CustomError(400, message);
      // return res.status(400).json({ message });
    }

    next();
  },

  validateNewProduct(req: Request, _res: Response, next: NextFunction) {
    const schema = Joi.object({
      name: Joi.string().required().min(2).messages({
        'any.required': '400|"name" is required',
        'string.base': '422|"name" must be a string',
        'string.min': '422|"name" length must be at least 3 characters long',
      }),
      amount: Joi.string().required().min(2).messages({
        'any.required': '400|"amount" is required',
        'string.min': '422|"amount" length must be at least 3 characters long',
        'string.base': '422|"amount" must be a string',
      }),
    });
    const { error } = schema.validate(req.body);

    if (error) {
      const [status, message] = error.message.split('|');
      throw new CustomError(status, message);
    }

    next();
  },

  validateNewUser(req: Request, _res: Response, next: NextFunction) {
    const schema = newUserSchema;
    const { error } = schema.validate(req.body);

    if (error) {
      const [status, message] = error.message.split('|');
      throw new CustomError(status, message);
    }

    next();
  },

  validateNewOrder(req: Request, _res: Response, next: NextFunction) {
    const schema = Joi.object({
      productsIds: Joi.array().required().min(1).messages({
        'any.required': '400|"productsIds" is required',
        'array.base': '422|"productsIds" must be an array',
        'array.min': '422|"productsIds" must include only numbers',
      }),
    });
    const { error } = schema.validate(req.body);
    console.log('error', error);

    if (error) {
      const [status, message] = error.message.split('|');
      throw new CustomError(status, message);
    }

    next();
  },
};

export default validators;
