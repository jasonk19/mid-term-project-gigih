import videoThumbnailDatabase from '../../../infrastructure/database/videoThumbnail/VideoThumbnailDatabase.js';

export async function getVideoThumbnailListUseCase() {
  const videoThumbnailList = await videoThumbnailDatabase.findVideoThumbnailList();

  return videoThumbnailList;
}