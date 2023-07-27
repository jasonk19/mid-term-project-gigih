import { Types } from 'mongoose';
import { CommentCollection } from './CommentSchema.js';

class CommentDatabase {
  async findCommentsByVideoId(videoId) {
    const comments = await CommentCollection.aggregate([
      {
        $match: {
          videoId: new Types.ObjectId(videoId)
        }
      },
      {
        $lookup: {
          from: 'accounts',
          localField: 'accountId',
          foreignField: '_id',
          as: 'account'
        }
      },
      {
        $unwind: '$account'
      },
      {
        $project: {
          _id: 1,
          comment: 1,
          timestamp: 1,
          videoId: 1,
          account: {
            _id: 1,
            name: 1,
            username: 1
          }
        }
      },
      {
        $sort: {
          timestamp: -1
        }
      }
    ])
  
    return comments
  }
  
  async addComment({ accountId, videoId, comment }) {
    const newComment = await CommentCollection.create({
      accountId: new Types.ObjectId(accountId),
      videoId: new Types.ObjectId(videoId),
      timestamp: new Date(),
      comment
    })
  
    return newComment;
  }
}

const commentDatabase = new CommentDatabase();

export default commentDatabase;