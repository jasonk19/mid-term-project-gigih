import express from 'express';
import { getCommentsController } from '../controllers/comment/GetCommentsController.js';

const router = express.Router();

router.get('/', getCommentsController);

export { router as commentRouter }
