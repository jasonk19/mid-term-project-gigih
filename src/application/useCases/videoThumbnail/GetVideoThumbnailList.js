import videoThumbnailDatabase from '../../../infrastructure/database/videoThumbnail/VideoThumbnailDatabase';

export async function getVideoThumbnailListUseCase() {
  const videoThumbnailList = await videoThumbnailDatabase.findVideoThumbnailList();

  return videoThumbnailList;
}