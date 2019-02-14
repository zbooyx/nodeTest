// const express = require('express');
// const app = express();
//
// app.get('/', function (req, res, next) {
//   res.json({
//     'status': 'Sukces!'
//   });
// });
//
// app.listen(8800, function () {
// console.log('Listenning xD');
// });


const app = require('./app');

app.set('port', process.env,PORT || 8080);
const server = app.listen(app.get('port'), () => {
  console.log(`Listening on ${server.address().port}`);
});
