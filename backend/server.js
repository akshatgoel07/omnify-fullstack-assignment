require('dotenv').config()
const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(weatherRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
