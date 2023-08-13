import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

import { accountRouter } from './api/routers/AccountRouter.js';
import { productRouter } from './api/routers/ProductRouter.js';
import { commentRouter } from './api/routers/CommentRouter.js';
import { videoThumbnailRouter } from './api/routers/VideoThumbnailRouter.js';
import commentSocket from './api/socket/CommentSocket.js';

async function main() {
  dotenv.config();
  // Connect Database
  await mongoose.connect(process.env.DATABASE_URL);

  const app = express();
  const port = process.env.PORT || 5000;
  
  app.use(cors())
  app.use(bodyparser.json())
  app.use(bodyparser.urlencoded({ extended: false }))

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

  const server = http.createServer(app);

  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      method: ['GET', 'POST']
    }
  })

  commentSocket(io);
  
  server.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
  });
}

main().catch((err) => console.log(err));