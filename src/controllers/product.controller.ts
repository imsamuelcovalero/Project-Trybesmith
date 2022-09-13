import { Request, Response } from 'express';
// import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/product.service';

// const productController = Router();

class ProductController {
  constructor(private productService = new ProductService()) { }

  public create = async (req: Request, res: Response)/* : Promise<Response> */ => {
    // console.log('entrou', req.body);
    const product = await this.productService.newProduct(req.body);
    res.status(201).json(product);
  };

  public getAll = async (req: Request, res: Response) => {
    const products = await this.productService.getAllProducts();
    res.status(200).json(products);
  };
}

export default ProductController;