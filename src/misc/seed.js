import mongoose from "mongoose";
import dotenv from 'dotenv'
import { ProductCollection } from "../infrastructure/database/product/ProductSchema.js";
import { VideoThumbnailCollection } from "../infrastructure/database/videoThumbnail/VideoThumbnailSchema.js";

async function seed() {
  dotenv.config();
  await mongoose.connect(process.env.DATABASE_URL);

  // Video Thumbnail Seed
  const videoThumbnailOne = await VideoThumbnailCollection.create({
    url: 'https://picsum.photos/id/1/200/320',
    videoUrl: 'https://www.youtube.com/embed/1bvbsx-hpFc'
  })
  const videoThumbnailTwo = await VideoThumbnailCollection.create({
    url: 'https://picsum.photos/id/2/200/320',
    videoUrl: 'https://www.youtube.com/embed/FTRGcFMjTQI'
  })
  const videoThumbnailThree = await VideoThumbnailCollection.create({
    url: 'https://picsum.photos/id/3/200/320',
    videoUrl: 'https://www.youtube.com/embed/5qap5aO4i9A'
  })
  const videoThumbnailFour = await VideoThumbnailCollection.create({
    url: 'https://picsum.photos/id/4/200/320',
    videoUrl: 'https://www.youtube.com/embed/TlWYgGyNnJo'
  })
  const videoThumbnailFive = await VideoThumbnailCollection.create({
    url: 'https://picsum.photos/id/5/200/320',
    videoUrl: 'https://www.youtube.com/embed/DWcJFNfaw9c'
  })

  // Products Seed
  const products = [
    {
      title: 'Product One',
      price: 10000,
      link: 'https://picsum.photos/id/6/150/200',
      videoId: videoThumbnailOne._id
    },
    {
      title: 'Product Two',
      price: 20000,
      link: 'https://picsum.photos/id/7/150/200',
      videoId: videoThumbnailOne._id
    },
    {
      title: 'Product Three',
      price: 30000,
      link: 'https://picsum.photos/id/8/150/200',
      videoId: videoThumbnailTwo._id
    },
    {
      title: 'Product Four',
      price: 25000,
      link: 'https://picsum.photos/id/9/150/200',
      videoId: videoThumbnailTwo._id
    },
    {
      title: 'Product Five',
      price: 35000,
      link: 'https://picsum.photos/id/10/150/200',
      videoId: videoThumbnailThree._id
    },
    {
      title: 'Product Six',
      price: 50000,
      link: 'https://picsum.photos/id/11/150/200',
      videoId: videoThumbnailThree._id
    },
    {
      title: 'Product Seven',
      price: 100000,
      link: 'https://picsum.photos/id/12/150/200',
      videoId: videoThumbnailFour._id
    },
    {
      title: 'Product Eight',
      price: 150000,
      link: 'https://picsum.photos/id/13/150/200',
      videoId: videoThumbnailFour._id
    },
    {
      title: 'Product Nine',
      price: 30000,
      link: 'https://picsum.photos/id/14/150/200',
      videoId: videoThumbnailFive._id
    },
    {
      title: 'Product Ten',
      price: 80000,
      link: 'https://picsum.photos/id/15/150/200',
      videoId: videoThumbnailFive._id
    },
  ]
  
  await ProductCollection.insertMany(products);
}

seed()
  .then(async () => {
    console.log('Seed success');
    await mongoose.disconnect();
  })
  .catch(async (error) => {
    console.log(error);
    await mongoose.disconnect();
    process.exit(1);
  });