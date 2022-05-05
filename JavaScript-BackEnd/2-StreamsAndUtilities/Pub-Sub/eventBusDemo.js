const subscribers = {};


//other names used for: add, on 
function subscribe(eventType, callback) {
  if (subscribers[eventType] == undefined) {
    subscribers[eventType] = [];
  }

  subscribers[eventType].push(callback);

  //bonus unsubscribe functionality
  return function () {
    subscribers[eventType] = subscribers[eventType].filter(cb => cb != callback);
  }
}

//other names used for: emit, trigger
function publish(eventType, ...params) {
  if (subscribers[eventType] == undefined) {
    return;
  }

  subscribers[eventType].forEach(cb => cb(...params));
}


const eventBus = {
  publish,
  subscribe
}

module.exports = eventBus;