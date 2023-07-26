import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'

dotenv.config();

async function main() {
  // Connect Database
  await mongoose.connect(process.env.DATABASE_URL);

  const app = express();
  const port = process.env.PORT || 5000;
  
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