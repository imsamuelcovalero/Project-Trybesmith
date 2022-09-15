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

  // função com Joi para validar a entrada de produtos, com nome e amount
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

  // função com Joi para validar a entrada de usuarios com username, classe, level e password
  validateNewUser(req: Request, _res: Response, next: NextFunction) {
    const schema = newUserSchema;
    const { error } = schema.validate(req.body);

    if (error) {
      const [status, message] = error.message.split('|');
      throw new CustomError(status, message);
    }

    next();
  },

  // função com Joi para validar a entrada de novas ordens, que recebe como entrada um array de productsIds
  validateNewOrder(req: Request, _res: Response, next: NextFunction) {
    const schema = Joi.object({
      productsIds: Joi.array().required().messages({
        'any.required': '400|"productsIds" is required',
        'array.base': '422|"productsIds" must be an array',
        'array.empty': '422|"productsIds" must include only numbers',
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

// class Validators {
//   // função com Joi para validar a entrada de login, com nome e senha
//   static validateLogin(req: Request, res: Response, next: NextFunction) {
//     console.log('validando login', req.body);

//     return {
//       schema: Joi.object({
//         username: Joi.string().required().messages({ 'string.empty': '400|"username" is required' }),
//         password: Joi.string().required().messages({ 'string.empty': '400|"password" is required' }),
//       }),

//       validate: (schema: Joi.ObjectSchema) => {
//         console.log('aqui');
//         const { error } = schema.validate(req.body);
//         if (error) {
//           const [status, message] = error.message.split('|');
//           throw new CustomError(status, message);
//         }
//       },

//       next,
//     };
//   }
// }

// export default Validators;
// const validators = {
//   validateName: async (req, res, next) => {
//     const schema = Joi.object({
//       name: Joi.string().min(5).required()
//         .messages({
//           'string.min': '422|"name" length must be at least {#limit} characters long',
//           'any.required': '400|"name" is required',
//         }),
//     });

//     const { error } = schema.validate(req.body);

//     if (error) {
//       const [status, message] = error.message.split('|');
//       return res.status(Number(status)).json({ message });
//     }

//     next();
//   },

//   validateSales: async (req, res, next) => {
//     const schema = Joi.array().items(Joi.object({
//       productId: Joi.number().required().messages({
//         'any.required': '400|"productId" is required',
//       }),
//       quantity: Joi.number().min(1).required().messages({
//         'any.required': '400|"quantity" is required',
//         'number.min': '422|"quantity" must be greater than or equal to {#limit}',
//       }),
//     }));

//     const { error } = schema.validate(req.body);

//     if (error) {
//       const [status, message] = error.message.split('|');
//       return res.status(Number(status)).json({ message });
//     }

//     next();
//   },
// };

// module.exports = validators;