import { Types } from 'mongoose';
import { CommentCollection } from './CommentSchema.js';

class CommentDatabase {
  async findCommentsByVideoId(videoId) {
    const comments = await CommentCollection.find({
      videoId
    })
      .sort({ timestamp: 1 })
  
    return comments
  }

  async addComment({ accountId, username, videoId, comment }) {
    const newComment = await CommentCollection.create({
      accountId: new Types.ObjectId(accountId),
      username,
      videoId: new Types.ObjectId(videoId),
      timestamp: new Date(),
      comment
    })
  
    return newComment;
  }
}

const commentDatabase = new CommentDatabase();

export default commentDatabase;