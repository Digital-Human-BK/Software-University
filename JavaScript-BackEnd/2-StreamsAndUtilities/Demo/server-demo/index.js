const http = require('http');
const fs = require('fs');

const { get, post, match } = require('./src/router.js');
const { home } = require('./src/controllers/home.js');
const { catalog, createGet, createPost, editGet, editPost } = require('./src/controllers/catalog.js');

get('/', home);
get('/catalog', catalog);
get('/create', createGet);
post('/create', createPost);
get('/edit', editGet);
post('/edit', editPost)

http.createServer((req, res) => {

  if (req.url == '/favicon.ico') {
    fs.createReadStream('./static/favicon.ico').pipe(res);
  } else if (req.url.startsWith('/public/')) {
    fs.createReadStream(`./styles/${req.url.slice(8)}`).pipe(res);
  } else {
    match(req, res);
  }
}).listen(5000);