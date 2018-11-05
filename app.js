/* #1 */
// var logger = require('./logger');

// logger.log('message');

/* #2 */
// var logger = require('./logger');

// logger = 1;

// logger.log('message');  // TypeError: logger.log is not a function

/* #3 */
// const logger = require('./logger');

// logger = 1;

// logger.log('message');  // TypeError: assignment to constant variable

// tool: jshint app.js

/* #4 */

// const logger = require('./logger');

// logger('message');

/* #5 */

const log = require('./logger');

log('message');
