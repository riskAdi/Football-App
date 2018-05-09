require('dotenv').config();
const logger = require('./libs/logger');
const { port } = require('./configuration');
const dbSequelize = require('./database');

/*
dbSequelize.lkCityModel.findAll().then(project => {

  console.log("projects===",project);
});
*/

//const lk_City = require('./database/entities/lk_City.js')(sequelize);
/*
lk_City.findAll().then(project => {

  console.log("projects===",project);
});
/*
lk_City.create({
  title: 'Rambow.....'
});*/
/*
lk_City.create({
  title: 'Rambow.....'
}).then(tasks => {
  console.log(tasks) // no programming, just reading :(
});
*/
const services = require('./services')(dbSequelize);
const app = require('./http')(services);

const server = app.listen(port, () => {
    logger.info(`Listening on *:${port}`);
  });
  