'use strict';

const express = require('express');
require("dotenv").config();

// Constants
const PORT = 3000;

// App
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World from NodeJS',
    env: process.env
  });
});

app.listen(PORT);
console.log(`Running on port ${PORT}`);