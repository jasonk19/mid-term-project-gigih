import { getVideoThumbnailUseCase } from "../../../application/useCases/videoThumbnail/GetVideoThumbnail.js";

export const getVideoThumbnailController = async (req, res) => {
  try {
    const { videoId } = req.params;

    const videoThumbnail = await getVideoThumbnailUseCase(videoId);
  
    res.status(200);
    res.json(videoThumbnail);
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode);
    res.json({
      message: error.message,
      error: true
    })
  }
}