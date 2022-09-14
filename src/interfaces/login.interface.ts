export interface ILogin {
  username: string;
  password: string;
  length: number;
}

export interface IToken {
  token: string;
}

export interface LoginController {
  login(): Promise<ILogin>;
}