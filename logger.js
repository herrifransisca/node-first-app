/* #1 */
// var url = 'http://myLogger.io/log';

// function log(message) {
//   // Send an HTTP request
//   console.log(message);
// }

// module.exports = log;

/* #2 */
// var x =;  // unexpected token
// var url = 'http://myLogger.io/log';

// function log(message) {
//   // Send an HTTP request
//   console.log(message);
// }

// module.exports = log;

/* #3 */
// (function(exports, require, module, __filename, __dirname) {
//   var url = 'http://myLogger.io/log';

//   function log(message) {
//     // Send an HTTP request
//     console.log(message);
//   }

//   module.exports = log;
// });

/* #4 */
// (function(exports, require, module, __filename, __dirname) {
//   var url = 'http://myLogger.io/log';

//   function log(message) {
//     // Send an HTTP request
//     console.log(message);
//   }

//   module.exports = log;

//   module.exports.log = log;
//   exports.log = log;

//   // CANNOT
//   exports = log;  // module.exports
// });

/* #5 */
console.log(__filename);
console.log(__dirname);

var url = 'http://myLogger.io/log';

function log(message) {
  // Send an HTTP request
  console.log(message);
}

module.exports = log;
