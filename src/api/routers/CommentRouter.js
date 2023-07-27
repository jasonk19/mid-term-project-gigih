import express from 'express';
import { getCommentsController } from '../controllers/comment/GetCommentsController';

const router = express.Router();

router.get('/', getCommentsController);

export default router;