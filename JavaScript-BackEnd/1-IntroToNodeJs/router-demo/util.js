function html(body, title = 'Hello') {
  return `
<!DOCTYPE html>
  <html lang="en">
  <head>
    <title>${title}</title>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/catalog">Catalog</a></li>
      </ul>
    </nav>    
    ${body}
  </body>
</html>`
}

function addItem(name, color) {
  const id = nextId();
  data[id] = {
    name,
    color
  };
}

function getItems() {
  return Object
    .entries(data)
    .map(([id, item]) => Object.assign({}, item, { id }));
}

function deleteItem(id){
  delete data[id];
}

function nextId() {
  return 'xxxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
}

const data = {
  '8282038s': {
    name: 'Product 1',
    color: 'red'
  },
  '478359a3': {
    name: 'Product 2',
    color: 'blue'
  }
};

module.exports = {
  html,
  addItem,
  getItems,
  deleteItem
};