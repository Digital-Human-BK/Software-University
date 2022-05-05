const { IncomingMessage, ServerResponse } = require('http');
const { formidable, IncomingForm } = require('formidable');
const { html, getItems, addItem, deleteItem } = require('../util');

const catalogPage = (data)=> `
  <h1>Catalog</h1>
  <form method="POST" action="/create">
    <label>Name: <input type="text" name="name"></label>
    <label>Color:
      <select name="color">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    <input type="submit" value="Create Item">  
  </form>
  <hr>
  <p>Items list</p>
  <ul>
   ${data.map(i => `<li>${i.name} - ${i.color}<a href="/delete?id=${i.id}">[Delete]</a></li>`).join('\n')}
  </ul>`;

function catalogController(req, res) {
  const data = getItems();
  res.write(html(catalogPage(data), 'Catalog Page'));
  res.end();
}

/**
 * 
 * @param {IncomingMessage} req 
 * @param {ServerResponse} res 
 */
function createController(req, res) {
  console.log('create request');

  const form = new IncomingForm();
  form.parse(req, (err, fields) => {
    console.log(fields);

    const item = {
      name: fields.name,
      color: fields.color
    }
    addItem(fields.name, fields.color)

    res.writeHead(301, {
      'Location': '/catalog'
    });
    res.end();
  });
}

function deleteController(req, res) {
  const id = req.url.searchParams.get('id')
  deleteItem(id);
  
  res.writeHead(301, {
    'Location': '/catalog'
  });
  res.end();
}

module.exports = {
  catalogController,
  createController,
  deleteController
}