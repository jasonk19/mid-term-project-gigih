import { getVideoThumbnailListUseCase } from "../../../application/useCases/videoThumbnail/GetVideoThumbnailList.js"

export const getVideoThumbnailListController = async (req, res) => {
  try {
    const videoThumbnailList = await getVideoThumbnailListUseCase();
  
    res.status(200);
    res.json(videoThumbnailList);
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode);
    res.json({
      message: error.message,
      error: true
    })
  }
}