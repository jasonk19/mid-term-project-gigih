import { VideoThumbnailCollection } from "./VideoThumbnailSchema.js";

class VideoThumbnailDatabase {
  async findVideoThumbnailList() {
    const videoThumbnailList = await VideoThumbnailCollection.find();
  
    return videoThumbnailList;
  }
}

const videoThumbnailDatabase = new VideoThumbnailDatabase();

export default videoThumbnailDatabase;