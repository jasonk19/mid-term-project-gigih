import { getProductsUseCase } from "../../../application/useCases/product/GetProducts.js";

export const getProductsController = async (req, res) => {
  try {
    const { videoId } = req.body;

    const products = await getProductsUseCase(videoId);
  
    res.status(200);
    res.json(products);
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode);
    res.json({
      message: error.message,
      error: true
    })
  }
}