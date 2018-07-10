require('dotenv').config();
const express = require('express');
const logger = require('./libs/logger');
const { port } = require('./configuration');
const dbSequelize = require('./database');
const services = require('./services')(dbSequelize);
const app = require('./http')(services);


const server = app.listen(port, () => {

 
//app.use(cookieParser());
  
  // console.log();

  //logger.info(`Listening on *:${port}`);

});
