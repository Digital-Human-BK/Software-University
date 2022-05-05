const { EventEmitter } = require('events');

const emitter = new EventEmitter();
//eventBus, observer
module.exports = emitter;