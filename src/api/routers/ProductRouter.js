import express from 'express';
import { getProductsController } from '../controllers/product/GetProductsController.js';

const router = express.Router();

router.get('/', getProductsController);

export { router as productRouter }
