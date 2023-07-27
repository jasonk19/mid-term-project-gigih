import commentDatabase from "../../../infrastructure/database/comment/CommentDatabase.js";

export async function addCommentUseCase({accountId, videoId, comment}) {
  if (comment === '') {
    const error = new Error('Comment cannot be empty');
    error.statusCode = 400;
    throw error;
  }

  await commentDatabase.addComment({
    accountId,
    videoId,
    comment
  })
}