require('./subscriber.js');
require('./subscriber2.js');
const publish = require('./publisher.js');

let index = 0;

setInterval(()=> {
  publish(++index);
}, 2000)