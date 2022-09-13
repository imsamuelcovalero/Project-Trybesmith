import connection from '../models/connection';
import ProductModel from '../models/product.model';
import { Product } from '../interfaces/product.interface';
// import CustomError from '../errors/CustomError';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public newProduct(product: Product): Promise<Product> {
    // console.log('entrou', product);
    return this.model.create(product);
  }

  public getAllProducts(): Promise<Product[]> {
    const products = this.model.getAll();
    return products;
  }
}

export default ProductService;