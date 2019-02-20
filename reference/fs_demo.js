const fs = require('fs');
const path = require('path');


// create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
//   if (err) throw err;
//   console.log('Folder created...');
// });

//create and write to file
fs.writeFile (path.join(__dirname, '/test', 'hello.txt'),
  'Hello World ;)',
  err => {
    if (err) throw err;
    console.log('Folder written to...');
  });
