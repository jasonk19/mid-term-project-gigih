require('dotenv').config();
const express = require('express');

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