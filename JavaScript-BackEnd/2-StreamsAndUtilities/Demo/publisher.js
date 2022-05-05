const observer = require('./observer.js');

function publish(index){
  console.log('Event Published');
  observer.emit('alert', `Publishing event. Published ${index} times`)
}

module.exports = publish;