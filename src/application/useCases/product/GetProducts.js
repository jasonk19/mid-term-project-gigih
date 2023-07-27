import productDatabase from "../../../infrastructure/database/product/ProductDatabase"

export async function getProductsUseCase(videoId) {
  const products = await productDatabase.findProductsByVideoId(videoId);

  return products
}