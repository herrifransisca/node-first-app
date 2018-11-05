var url = 'http://myLogger.io/log';

function log(message) {
  // Send an HTTP request
  console.log(message);
}

module.exports.log = log;
