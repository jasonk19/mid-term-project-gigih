import commentDatabase from "../../../infrastructure/database/comment/CommentDatabase.js";

export async function addCommentUseCase({accountId, videoId, comment}) {
  await commentDatabase.addComment({
    accountId,
    videoId,
    comment
  })
}