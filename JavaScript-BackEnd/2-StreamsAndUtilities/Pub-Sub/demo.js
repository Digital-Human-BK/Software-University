const eventBus = require('./eventBusDemo.js');

const unsubscribe = eventBus.subscribe('travel', (param1)=> {
  console.log('Awesome, you\'re going to', param1);
});

eventBus.subscribe('travel', (param1, param2)=> {
  console.log(param2, 'is very beautiful city');
});

eventBus.subscribe('work', ()=> {
  console.log(`Unfortunately you have to go to work`);
})

eventBus.publish('travel', 'Sofia', 'Paris');
eventBus.publish('work');

unsubscribe();

eventBus.publish('travel', 'Sofia', 'Paris');
eventBus.publish('work');
