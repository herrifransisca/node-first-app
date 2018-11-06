const EventEmitter = require('events');

const emitter = new EventEmitter();

// Register a Listener
// emitter.addListener('messageLogged', function() {
//   console.log('Listener called');
// });

// Alias "on", that used more often
emitter.on('messageLogged', function() {
  console.log('Listener called');
});

// Raise an event
emitter.emit('messageLogged');
