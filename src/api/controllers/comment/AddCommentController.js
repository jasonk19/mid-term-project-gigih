import { addCommentUseCase } from "../../../application/useCases/comment/AddComment.js";

export const addCommentController = async (req, res) => {
  try {
    const accountId = req.account._id;
    const { videoId } = req.params;
    const { comment } = req.body;

    await addCommentUseCase({
      accountId,
      videoId,
      comment
    })
  
    res.status(200);
    res.json({
      status: 'Success',
      message: 'Comment added'
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