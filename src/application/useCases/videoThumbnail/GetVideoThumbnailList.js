import { findVideoThumbnailList } from "../../../infrastructure/database/videoThumbnail/VideoThumbnailDatabase";

export async function getVideoThumbnailList() {
  const videoThumbnailList = await findVideoThumbnailList();

  return videoThumbnailList;
}