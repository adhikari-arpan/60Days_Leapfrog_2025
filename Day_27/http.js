const http = require('http');

let users = [{ id: 1, name: 'Alice' }];

const server = http.createServer((req, res) => {
  if (req.url === '/users' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }
  else if (req.url === '/users' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      const user = JSON.parse(body);
      user.id = users.length + 1;
      users.push(user);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(user));
    });
  }
  else if (req.url.startsWith('/users/') && req.method === 'PUT') {
    const id = parseInt(req.url.split('/')[2]);
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      const user = JSON.parse(body);
      user.id = id;
      const idx = users.findIndex(u => u.id === id);
      if (idx !== -1) {
        users[idx] = user;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(user));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'User not found' }));
      }
    });
  }
  else if (req.url.startsWith('/users/') && req.method === 'PATCH') {
    const id = parseInt(req.url.split('/')[2]);
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      const updates = JSON.parse(body);
      const user = users.find(u => u.id === id);
      if (user) {
        Object.assign(user, updates);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(user));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'User not found' }));
      }
    });
  }
  else if (req.url.startsWith('/users/') && req.method === 'DELETE') {
    const id = parseInt(req.url.split('/')[2]);
    const idx = users.findIndex(u => u.id === id);
    if (idx !== -1) {
      users.splice(idx, 1);
      res.writeHead(204);
      res.end();
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'User not found' }));
    }
  }
  else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
