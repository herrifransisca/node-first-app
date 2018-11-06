/* #1 */
// const http = require('http');

// const server = http.createServer();

// server.listen(3000);

// console.log('Listening on port 3000...');

/* #2 */
// const http = require('http');

// const server = http.createServer();

// server.on('connection', socket => {
//   console.log('New connection...');
// });

// server.listen(3000);

// console.log('Listening on port 3000...');

/* #3 */
// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.write('Hello World');
//     res.end();
//   }
// });

// server.listen(3000);

// console.log('Listening on port 3000...');

/* #4 */

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello World');
    res.end();
  }

  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);

console.log('Listening on port 3000...');
