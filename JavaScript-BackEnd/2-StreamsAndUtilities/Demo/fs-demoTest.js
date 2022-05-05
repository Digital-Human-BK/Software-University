const fs = require('fs');

fs.readFile('./data.json', 'utf-8', (err, data) => {

  if (err) {
    throw Error(err.message);
  }

  const dataAsObject = JSON.parse(data);
  dataAsObject.price++

  fs.writeFile('./data.json', JSON.stringify(dataAsObject, null, 2), 'utf-8', err => {

    if (err) {
      throw Error(err.message);
    }
  })
})