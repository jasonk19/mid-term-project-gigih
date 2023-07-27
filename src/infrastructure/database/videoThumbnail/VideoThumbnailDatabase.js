import { VideoThumbnailCollection } from "./VideoThumbnailSchema";

export async function findVideoThumbnailList() {
  const videoThumbnailList = await VideoThumbnailCollection.find();

  return videoThumbnailList;
}