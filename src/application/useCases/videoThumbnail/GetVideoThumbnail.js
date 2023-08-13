import videoThumbnailDatabase from '../../../infrastructure/database/videoThumbnail/VideoThumbnailDatabase.js';

export async function getVideoThumbnailUseCase(id) {
  const videoThumbnail = await videoThumbnailDatabase.findVideoThumbnail(id)

  if (videoThumbnail === null) {
    const error = new Error('Video not found');
    error.statusCode = 400;
    throw error;
  }

  return videoThumbnail;
}