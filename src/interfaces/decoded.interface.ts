// cria uma interface para o decoded
import { Request } from 'express';

// cria uma interface para o decoded com id sendo numero e password sendo uma array com numeros e strings e o id
export interface IDecoded {
  id: number;
}

export interface IGetUserAuthInfoRequest extends Request {
  user: IDecoded;
}
