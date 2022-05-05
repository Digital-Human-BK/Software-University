const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream('./index.html', {
  encoding: 'utf-8',
  highWaterMark: 1024
});

const writableStream = fs.createWriteStream('transform.txt');

//this line does the same as the lines commented bellow
readableStream.pipe(gzip).pipe(writableStream);

// readableStream.on('data', (chunk) => {
//   console.log('NEW CHUNK');

//   writableStream.write(chunk);
// });

// readableStream.on('end', () => {
//   console.log('Stream End');
//   writableStream.end();
// });

// writableStream.on('finish', () => {
//   console.log('writable stram finished');
// })