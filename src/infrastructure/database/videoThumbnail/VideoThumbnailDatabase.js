import { VideoThumbnailCollection } from "./VideoThumbnailSchema.js";

class VideoThumbnailDatabase {
  async findVideoThumbnailList() {
    const videoThumbnailList = await VideoThumbnailCollection.find();
  
    return videoThumbnailList;
  }

  async findVideoThumbnail(id) {
    const videoThumbnail = await VideoThumbnailCollection.findById(id);

    return videoThumbnail === null ? null : videoThumbnail;
  }
}

const videoThumbnailDatabase = new VideoThumbnailDatabase();

export default videoThumbnailDatabase;