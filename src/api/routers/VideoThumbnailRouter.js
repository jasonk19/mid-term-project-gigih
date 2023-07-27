import express from 'express';
import { getVideoThumbnailListController } from '../controllers/videoThumbnail/GetVideoThumbnailListController.js';

const router = express.Router();

router.get('/', getVideoThumbnailListController);

export { router as videoThumbnailRouter }
