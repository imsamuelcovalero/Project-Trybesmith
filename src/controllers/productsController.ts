import { Request, Response, Router } from 'express';
import movieService from '../services/movie.service';

const productController = Router();

productController
productController.post('/', async (req: Request, res: Response): Promise<Response> => {
  const movie = await movieService.newMovie(req.body);
  return res.status(200).json(movie);
});

export default productController;