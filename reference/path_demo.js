const path = require('path');

console.log(path.basename(__filename));

console.log(path.dirname(__filename));

console.log(path.extname(__filename));

console.log(path.parse(__filename).base);
//
// // ../test.hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));
//
//
