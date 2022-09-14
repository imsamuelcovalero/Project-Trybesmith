export interface IOrder {
  id?: number;
  userId: number;
}

export interface OrderController {
  create(): Promise<IOrder>;
}