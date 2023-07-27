import { ProductCollection } from "./ProductSchema";

class ProductDatabase {
  async findProductsByVideoId(videoId) {
    const products = await ProductCollection.find({
      videoId
    })
  
    return products
  }
  
  async addProductByVideoId(videoId, { title, price, link }) {
    const product = await ProductCollection.create({
      title,
      price,
      link,
      videoId
    })
  
    return product
  }
}

const productDatabase = new ProductDatabase();

export default productDatabase;