const http = require('http');
const layout = require('./util.js');
const aboutPage = require('./views/about.js');
const homePage = require('./views/home.js');

const server = http.createServer((req, res) => {
  console.log(req.url);

  const url = new URL(req.url, `http://${req.headers.host}`)
  req.url = url;

  console.log(req.method);
  // console.log(req.url);


  if(req.url.pathname == '/') {
    res.write(layout('Home', homePage));
    res.end();
  } else if(req.url.pathname == '/about'){
    res.write(layout('About', aboutPage));
    res.end();
  } else {
    res.statusCode = 404;
    res.end('404 Not Found')
  }
  
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}...`));