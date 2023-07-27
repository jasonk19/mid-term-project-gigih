import commentDatabase from "../../../infrastructure/database/comment/CommentDatabase.js";

export async function getCommentsUseCase(videoId) {
  const comments = await commentDatabase.findCommentsByVideoId(videoId);

  return comments;
}