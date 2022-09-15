export interface ILogin {
  id?: number;
  username: string;
  password: string;
  length: number;
  BinaryRow: object;
  user: object;
}

export interface IToken {
  token: string;
}

export interface LoginController {
  login(): Promise<ILogin>;
}