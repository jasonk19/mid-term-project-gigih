import mongoose from "mongoose";

const videoThumbnailSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const VideoThumbnailCollection = mongoose.model('VideoThumbnail', videoThumbnailSchema);

export {
  VideoThumbnailCollection
}