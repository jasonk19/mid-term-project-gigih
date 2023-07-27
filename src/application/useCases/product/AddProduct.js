import { addProductByVideoId } from "../../../infrastructure/database/product/ProductDatabase";

export async function addProduct(props) {
  const { videoId, data } = props;
  const { title, price, link } = data;

  const product = await addProductByVideoId(videoId, {
    title,
    price,
    link
  })

  return product
}