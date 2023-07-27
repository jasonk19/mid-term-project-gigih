import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import accountRouter from './api/routers/AccountRouter';
import productRouter from './api/routers/ProductRouter';
import commentRouter from './api/routers/CommentRouter';
import videoThumbnailRouter from './api/routers/VideoThumbnailRouter';

dotenv.config();

async function main() {
  // Connect Database
  await mongoose.connect(process.env.DATABASE_URL);

  const app = express();
  const port = process.env.PORT || 5000;
  
  app.use('/account', accountRouter);
  app.use('/product', productRouter);
  app.use('/comment', commentRouter);
  app.use('/videos', videoThumbnailRouter);

  app.get('/', (req, res) => {
    res.status(200);
    res.json({
      status: 'Healthy'
    })
  })
  
  app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
  });
}

main().catch((err) => console.log(err));