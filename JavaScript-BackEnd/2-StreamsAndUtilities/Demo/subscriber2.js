const observer = require('./observer.js');

function subscribe(){
  observer.on('alert', (data)=> {
    console.log('Event Received 2nd Subs');
    console.log(`@nd sub ${data}`);
  });
}

subscribe();