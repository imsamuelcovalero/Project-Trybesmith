// import Joi from 'joi';

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