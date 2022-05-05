const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('click', (a, b) => {
  console.log('Click detected');
  console.log(a, b);
});

eventEmitter.emit('click', 'Hello', 'Dude');