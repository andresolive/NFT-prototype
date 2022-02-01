'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const router = require('./router');
const PORT = process.env.PORT || 3001;

const db = require('./models/index');

app.use(cors());
app.use(express.json());
app.use(router);

(async () => {
  try {
    await db.sequelize.sync()
    console.log('Connected to the database!')
  }
  catch (e) {
    console.log('ERROR: ', e);
  }
  app.listen(PORT)
  console.log(`Server listening on port ${PORT} 🚀 `)
})();

