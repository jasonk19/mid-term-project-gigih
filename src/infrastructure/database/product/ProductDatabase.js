import { ProductCollection } from "./ProductSchema";

export async function findProductsByVideoId(videoId) {
  const products = await ProductCollection.find({
    videoId
  })

  return products
}

export async function addProductByVideoId(videoId, { title, price, link }) {
  const product = await ProductCollection.create({
    title,
    price,
    link,
    videoId
  })

  return product
}