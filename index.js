const Logger = require('./logger');

const logger = new Logger();
logger.on('message', (data) => console.log('Called Listener', data));

logger.log('hi wodddddrld');
logger.log('hiffffffff world');
logger.log('hi wogggggggggrld');
logger.log('hi wovvvvvvvvvvvvrld');
