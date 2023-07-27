import { VideoThumbnailCollection } from "./VideoThumbnailSchema";

class VideoThumbnailDatabase {
  async findVideoThumbnailList() {
    const videoThumbnailList = await VideoThumbnailCollection.find();
  
    return videoThumbnailList;
  }
}

const videoThumbnailDatabase = new VideoThumbnailDatabase();

export default videoThumbnailDatabase;