import jwt, { sign, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import { ILogin } from '../interfaces/login.interface';
import { IUser } from '../interfaces/user.interface';
import { IDecoded, IGetUserAuthInfoRequest } from '../interfaces/decoded.interface';
import CustomError from '../errors/CustomError';

dotenv.config();

const jwtSecret = 'secret';

const tokenFunctions = {
  generateToken: (user: IUser | ILogin) => {
    const signOptions: SignOptions = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = sign({ id: user.id, username: user.username }, jwtSecret, signOptions);
    return token;
  },

  decode: (req: Request, _res: Response, next: NextFunction) => {
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
    }
  },
};

export default tokenFunctions;
