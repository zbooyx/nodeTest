const EventEmitter = require('events');

//create class

class MyEmitter extends EventEmitter {

}
// init object

const myEmitter = new MyEmitter();

// event listener

myEmitter.on('event', () => console.log('Event FIRED'));

//INIT emitter

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
