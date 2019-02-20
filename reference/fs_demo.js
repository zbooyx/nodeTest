const fs = require('fs');
const path = require('path');


// create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
//   if (err) throw err;
//   console.log('Folder created...');
// });

//create and write to file
// fs.writeFile (path.join(__dirname, '/test', 'hello.txt'),
//   'Hello World ;)',
//   err => {
//     if (err) throw err;
//     console.log('Folder written to...');
//
//     fs.appendFile (path.join(__dirname, '/test', 'hello.txt'),
//       '    Daje rade',
//       err => {
//         if (err) throw err;
//         console.log('Folder written to...');
//       });
//   });

// read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8',  (err,  data) => {
  if (err) throw err;
  console.log(data);
});


// rename file

fs.rename(path.join())
