require('dotenv').config();
const logger = require('./libs/logger');
const { port } = require('./configuration');
const dbSequelize = require('./database');
const services = require('./services')(dbSequelize);
const app = require('./http')(services);


const server = app.listen(port, () => {

// console.log();
  
  //logger.info(`Listening on *:${port}`);
});
