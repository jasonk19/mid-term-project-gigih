import express from 'express';
import { verifyToken } from '../middlewares/VerifyToken.js';
import { getCommentsController } from '../controllers/comment/GetCommentsController.js';
import { addCommentController } from '../controllers/comment/AddCommentController.js';

const router = express.Router();

router.get('/:videoId', getCommentsController);

router.post(
  '/:videoId',
  verifyToken,
  addCommentController
)

export { router as commentRouter }
