const EventEmitter = require('events');

const emitter = new EventEmitter();

// Register a listener
emitter.on('logging', arg => {
  console.log('logging', arg);
}); // given exercise

emitter.on('messageLogged', arg => {
  console.log('logged', arg);
});

// Raise an event
emitter.emit('logging', { data: 'message' }); // given exercise
emitter.emit('messageLogged', { id: 1, url: 'http://' });
