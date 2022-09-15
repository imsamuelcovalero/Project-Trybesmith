import { NextFunction, Request, Response } from 'express';
import CustomError from '../errors/CustomError';

const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('error', err);
  const { status, message } = err as CustomError;

  const statusNumber = Number(status);

  res.status(statusNumber || 500).json({
    // code: err.code || 'undefinedError',
    message,
  });
};

export default errorMiddleware;