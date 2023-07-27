import { Types } from 'mongoose';
import { CommentCollection } from './CommentSchema';

export async function findCommentsByVideoId(videoId) {
  const comments = await CommentCollection.find({
    videoId
  })

  return comments
}

export async function addComment({ accountId, videoId, comment }) {
  const comment = await CommentCollection.create({
    accountId: new Types.ObjectId(accountId),
    videoId: new Types.ObjectId(videoId),
    timestamp: new Date(),
    comment
  })

  return comment;
}