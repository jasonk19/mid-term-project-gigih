import commentDatabase from "../../../infrastructure/database/comment/CommentDatabase.js";

export async function addCommentUseCase({accountId, username, videoId, comment}) {
  if (comment === '') {
    const error = new Error('Comment cannot be empty');
    error.statusCode = 400;
    throw error;
  }

  const newComment = await commentDatabase.addComment({
    accountId,
    username,
    videoId,
    comment
  })

  return newComment;
}