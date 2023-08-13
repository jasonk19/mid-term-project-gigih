import express from 'express';
import { getProductsController } from '../controllers/product/GetProductsController.js';

const router = express.Router();

router.get('/:videoId', getProductsController);

export { router as productRouter }
