import productDatabase from "../../../infrastructure/database/product/ProductDatabase.js"

export async function getProductsUseCase(videoId) {
  const products = await productDatabase.findProductsByVideoId(videoId);

  return products
}