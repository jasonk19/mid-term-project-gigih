import { addCommentUseCase } from "../../../application/useCases/comment/AddComment.js";

export const addCommentController = async (req, res) => {
  try {
    const { accountId, username } = req.account;
    const { videoId } = req.params;
    const { comment } = req.body;

    const newComment = await addCommentUseCase({
      accountId,
      username,
      videoId,
      comment
    })
  
    res.status(200);
    res.json({
      status: 'Success',
      message: 'Comment added',
      comment: newComment
    });
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode);
    res.json({
      message: error.message,
      error: true
    })
  }
}