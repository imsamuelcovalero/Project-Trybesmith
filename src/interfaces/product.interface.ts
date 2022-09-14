export interface IProduct {
  id?: number;
  name: string;
  amount: number;
  orderId: number;
}

// export default Product;

export interface ProductController {
  create(): Promise<IProduct>;
  getAll(): Promise<IProduct[]>;
  getById(id: number): Promise<IProduct>;
  update(id: number): Promise<IProduct>;
  delete(id: number): Promise<IProduct>;
}