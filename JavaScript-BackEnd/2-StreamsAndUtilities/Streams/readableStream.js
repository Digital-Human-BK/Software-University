const fs = require('fs');

const readableStream = fs.createReadStream('./index.html', {
  encoding: 'utf-8',
  highWaterMark: 1024
});

const writableStream = fs.createWriteStream('output.txt');


readableStream.on('data', (chunk) => {
  console.log('NEW CHUNK');

  writableStream.write(chunk);
});

readableStream.on('end', () => {
  console.log('Stream End');
  writableStream.end();
});

writableStream.on('finish', () => {
  console.log('writable stram finished');
})