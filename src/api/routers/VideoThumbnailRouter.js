import express from 'express';
import { getVideoThumbnailListController } from '../controllers/videoThumbnail/GetVideoThumbnailListController';

const router = express.Router();

router.get('/', getVideoThumbnailListController);

export default router;