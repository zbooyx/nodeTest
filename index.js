// const Logger = require('./logger');
//
// const logger = new Logger();
// logger.on('message', (data) => console.log('Called Listener', data));
//
// logger.log('hi wodddddrld');
// logger.log('hiffffffff world');
// logger.log('hi wogggggggggrld');
// logger.log('hi wovvvvvvvvvvvvrld');


const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url === '/api/users') {
    const users = [
      {name: "bodddddbo", age: 40},
      {name: "boxssbo", age: 403},
      {name: "bobwwwwwwo", age: 4033}
    ];
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(users))
  }
});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server runnung on port: ${PORT}`));
