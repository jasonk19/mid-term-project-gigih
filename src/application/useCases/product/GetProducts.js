import { findProductsByVideoId } from "../../../infrastructure/database/product/ProductDatabase"

export async function getProducts(videoId) {
  const products = await findProductsByVideoId(videoId);

  return products
}