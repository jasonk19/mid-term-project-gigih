import express from 'express';
import { getProductsController } from '../controllers/product/GetProductsController';

const router = express.Router();

router.get('/', getProductsController);

export default router;