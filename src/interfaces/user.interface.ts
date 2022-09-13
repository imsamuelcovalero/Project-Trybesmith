export interface User {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface UserController {
  create(): Promise<User>;
  getAll(): Promise<User[]>;
  getById(id: number): Promise<User>;
  update(id: number): Promise<User>;
  delete(id: number): Promise<User>;
}