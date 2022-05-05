const fs = require('fs');

const layout = fs.readFileSync('./static/layout.html').toString();

function loadFragment(name, cb){
  fs.readFile(`./static/${name}.html`, (err, data) => cb(data.toString()));
}

function render(body, title) {
  return layout.replace('{{{body}}}', body).replace('{{{title}}}', title);
}

module.exports = {
  loadFragment,
  render
}