const http = require('http');
const fs = require('fs')

http.createServer((req, res) => {

  console.log('Request');
  if (req.method == 'GET') {
    // fs.readFile('./index.html', 'utf-8', (err, data) => {
    //   res.write(data);
    //   res.end();
    // });

    // const fileStream = fs.createReadStream('./index.html');
    // fileStream.on('data', chunk => {
    //   res.write(chunk);
    // });
    // fileStream.on('end', () => {
    //   res.end();
    // });

    fs.createReadStream('./index.html').pipe(res);
  } else if (req.method == 'POST') {
    let body = '';
    req.on('data', data => {
      console.log('Chunk >>>', data.toString());
      body += data;
    });
    req.on('end', () => {
      console.log('Body', JSON.parse(body));
      const bodyAsObj = JSON.parse(body)
      bodyAsObj.price++;
      res.writeHead(200, {
        'Content-Type': 'application/json'
      })
      res.write(JSON.stringify(bodyAsObj));
      res.end();
    })
  }

}).listen(5000);