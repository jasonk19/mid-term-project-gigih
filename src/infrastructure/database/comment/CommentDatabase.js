import { Types } from 'mongoose';
import { CommentCollection } from './CommentSchema';

class CommentDatabase {
  async findCommentsByVideoId(videoId) {
    const comments = await CommentCollection.aggregate([
      {
        $match: {
          videoId
        }
      },
      {
        $lookup: {
          from: 'accounts',
          localField: 'accountId',
          foreignField: '_id',
          as: 'account'
        }
      }
    ])
  
    return comments
  }
  
  async addComment({ accountId, videoId, comment }) {
    const comment = await CommentCollection.create({
      accountId: new Types.ObjectId(accountId),
      videoId: new Types.ObjectId(videoId),
      timestamp: new Date(),
      comment
    })
  
    return comment;
  }
}

const commentDatabase = new CommentDatabase();

export default commentDatabase;