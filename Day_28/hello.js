// Import express
const express = require('express');

// Create an express app
const app = express();

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello World, Express I am coming for you! 🤠🧑‍💻');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
