import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Account'
  },
  comment: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
  videoId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'VideoThumbnail'
  }
})

const CommentCollection = mongoose.model('Comment', commentSchema);

export {
  CommentCollection
}