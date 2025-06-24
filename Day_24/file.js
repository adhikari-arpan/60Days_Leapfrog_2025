const fs = require('fs');

// Asynchronous
fs.writeFile('example.txt', 'Hello, world!', (err) => {
  if (err) throw err;
  console.log('File created and written!');
});

// Asynchronous
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.unlink('example.txt', (err) => {
//   if (err) throw err;
//   console.log('File deleted!');
// });
