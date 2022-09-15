import jwt, { sign, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import { ILogin } from '../interfaces/login.interface';
import { IUser } from '../interfaces/user.interface';
import { IDecoded, IGetUserAuthInfoRequest } from '../interfaces/decoded.interface';
import CustomError from '../errors/CustomError';

dotenv.config();

// const JWT_SECRET: Secret = process.env.JWT_SECRET as Secret;
// console.log('JWT_SECRET', JWT_SECRET);

const jwtSecret = 'secret';

// async function generateToken(password: IUser | ILogin) {
//   const signOptions: SignOptions = {
//     expiresIn: '7d',
//     algorithm: 'HS256',
//   };

//   // const { password } = user;
//   const token = sign({ password }, jwtSecret, signOptions);
//   return token;
// }

const tokenValidator = {
  generateToken: async (user: IUser | ILogin) => {
    const signOptions: SignOptions = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    console.log('userToken_id_username', user.id, user.username);

    const token = sign({ id: user.id, username: user.username }, jwtSecret, signOptions);
    return token;
  },

  decode: async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    // console.log('token', token);

    if (!token) {
      throw new CustomError(401, 'Token not found');
    }

    try {
      const decoded = jwt.verify(token, jwtSecret) as unknown as IDecoded;

      (req as IGetUserAuthInfoRequest).user = decoded;

      next();
    } catch (err) {
      throw new CustomError(401, 'Invalid token');
      return res.status(401).json({ message: 'Invalid token' });
    }
  },
};

export default tokenValidator;
