const observer = require('./observer.js');

function subscribe(){
  observer.on('alert', (data)=> {
    console.log('Event Received');
    console.log(data);
  });
}

subscribe();