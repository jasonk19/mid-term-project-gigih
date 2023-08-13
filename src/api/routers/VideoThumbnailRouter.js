import express from 'express';
import { getVideoThumbnailListController } from '../controllers/videoThumbnail/GetVideoThumbnailListController.js';
import { getVideoThumbnailController } from '../controllers/videoThumbnail/GetVideoThumbnailController.js';

const router = express.Router();

router.get('/', getVideoThumbnailListController);

router.get('/:videoId', getVideoThumbnailController);

export { router as videoThumbnailRouter }
