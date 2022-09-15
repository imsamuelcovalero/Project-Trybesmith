export interface IOrder {
  id?: number;
  userId: number;
}

export interface OrderController {
  create(userId: number): Promise<IOrder>;
  getAll(): Promise<IOrder[]>;
  getById(id: number): Promise<IOrder>;
  update(id: number): Promise<IOrder>;
  delete(id: number): Promise<IOrder>;
}