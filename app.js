require('dotenv').config();
const express = require('express');
const logger = require('./libs/logger');
const { port } = require('./configuration');
const dbSequelize = require('./database');
const services = require('./services')(dbSequelize);
const app = require('./http')(services);





const server = app.listen(port, () => {

  
  //dbSequelize.sequelize.query("SELECT * FROM users,user_profile where users.id = user_profile.user_id ", { type: dbSequelize.sequelize.QueryTypes.SELECT})
  //.then(users => {

   // console.log(users);
  //});


//app.use(cookieParser());
  
  // console.log();

  //logger.info(`Listening on *:${port}`);

});
