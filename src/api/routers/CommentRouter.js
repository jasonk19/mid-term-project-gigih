import express from 'express';
import { verifyToken } from '../middlewares/VerifyToken.js';
import { getCommentsController } from '../controllers/comment/GetCommentsController.js';
import { addCommentController } from '../controllers/comment/AddCommentController.js';

const router = express.Router();

router.get('/', getCommentsController);

router.post(
  '/post',
  verifyToken,
  addCommentController
)

export { router as commentRouter }
