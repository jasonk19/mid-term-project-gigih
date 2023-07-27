import productDatabase from "../../../infrastructure/database/product/ProductDatabase.js";

export async function addProductUseCase(props) {
  const { videoId, data } = props;
  const { title, price, link } = data;

  const product = await productDatabase.addProductByVideoId(videoId, {
    title,
    price,
    link
  })

  return product
}