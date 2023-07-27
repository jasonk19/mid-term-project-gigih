import { getCommentsUseCase } from "../../../application/useCases/comment/GetComments.js";

export const getCommentsController = async (req, res) => {
  try {
    const { videoId } = req.body;

    const comments = await getCommentsUseCase(videoId);
  
    res.status(200);
    res.json(comments);
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode);
    res.json({
      message: error.message,
      error: true
    })
  }
}