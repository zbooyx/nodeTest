const path = require('path');

console.log('basename:  ' + path.basename(__filename));

console.log('dirname:  ' + path.dirname(__filename));

console.log('extname:  ' + path.extname(__filename));

console.log('base:  ' + path.parse(__filename).base);
console.log('object:  ' + path.parse(__filename));
//
// // ../test.hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));
