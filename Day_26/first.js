// Import required modules
const http = require('http');
const url = require('url');

// Create the server
const server = http.createServer((req, res) => {
  // Parse the URL and its query parameters
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (path === '/') {
    res.end('Welcome to the homepage!');
  } else if (path === '/about') {
    // Example: /about?userId=1&name=piyush
    const name = query.name || 'Guest';
    res.end(`Hello, ${name}! This is the about page.`);
  } else {
    res.end('Page not found.');
  }
});

// Start the server
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
