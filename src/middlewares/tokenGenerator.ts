import { sign, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ILogin } from '../interfaces/login.interface';
import { IUser } from '../interfaces/user.interface';

dotenv.config();

// const JWT_SECRET: Secret = process.env.JWT_SECRET as Secret;
// console.log('JWT_SECRET', JWT_SECRET);

const jwtSecret = 'secret';

export default async function generateToken(password: IUser | ILogin) {
  const signOptions: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  // const { password } = user;
  const token = sign({ password }, jwtSecret, signOptions);
  return token;
}

// import dotenv from 'dotenv';
// import { Jwt } from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express';
// import UserModel from '../models/user.model';

// import CustomError from '../errors/CustomError';
// // import UserModel from '../models/user.model';

// dotenv.config();

// const { JWT_SECRET } = process.env;

// const tokenValidator = async (req: Request, _res: Response, next: NextFunction) => {
//   const { authorization } = req.headers;
//   if (!authorization) {
//     throw new CustomError(401, 'Token não encontrado');
//   }
//   if (!authorization.startsWith('Bearer ')) {
//     throw new CustomError(401, 'Token mal formatado');
//   }
//   const token = authorization.split(' ')[1];
//   try {
//     const decoded = Jwt.verify(token, JWT_SECRET);
//     const user = await UserModel.findByPk(decoded.id);
//     if (!user) {
//       throw new CustomError(401, 'Token expirado ou inválido');
//     }
//     Request.user = user;
//     next();
//   } catch (err) { throw new CustomError(401, 'Token expirado ou inválido'); }
// };

// export default tokenValidator;

// const { JWT_SECRET } = process.env;

// if (!JWT_SECRET) {
//   const error = Error;
//   error.message = 'JWT_SECRET não foi definido no .env';
//   throw error;
// }

// const tokenValidator = {
//   auth: async (req: Request, _res: Response, _next: NextFunction) => {
//     const { authorization } = req.headers;

//     if (!authorization) {
//       throw new CustomError(401, 'Token not found');
//     }

//     try {
//       jwt.verify(authorization, JWT_SECRET);

//       next();
//     } catch (error) {
//       throw new CustomError(401, 'Expired or invalid token');
//     }
//   },

//   decode: async (req, res, next) => {
//     const token = req.headers.authorization;

//     if (!token) {
//       return res.status(401).json({ error: 'Token não encontrado' });
//     }

//     try {
//       const decoded = jwt.verify(token, JWT_SECRET);

//       const user = await User.findOne({ where: { email: decoded.email } });
//       if (!user) {
//         return res
//           .status(401)
//           .json({ message: 'Erro ao procurar usuário do token.' });
//       }
//       req.user = user;

//       next();
//     } catch (err) {
//       return res.status(401).json({ message: err.message });
//     }
//   },
// };

// module.exports = tokenValidator;