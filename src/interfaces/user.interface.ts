export interface IUser {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface UserController {
  create(): Promise<IUser>;
  getAll(): Promise<IUser[]>;
  getById(id: number): Promise<IUser>;
  update(id: number): Promise<IUser>;
  delete(id: number): Promise<IUser>;
}