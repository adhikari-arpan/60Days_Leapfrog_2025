const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from home page');
});

app.get('/about', (req, res) => {
  res.send('Hello from about page');
});
