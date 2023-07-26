import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  videoId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'VideoThumbnail'
  }
}, {
  timestamps: true
})

const ProductCollection = mongoose.model('Product', productSchema);

export {
  ProductCollection
}