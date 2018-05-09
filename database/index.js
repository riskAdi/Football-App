const Sequelize = require('sequelize');
const logger = require('../libs/logger');
const dbConConfig = require('../configuration');

const sequelize = new Sequelize(dbConConfig.db,dbConConfig.user,dbConConfig.pass, {
  dialect: 'mysql',
  host: "localhost",
  port: 8889,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const lkCityModel           = require('./entities/lk_City')(sequelize);
  const lkFreeTypeModel       = require('./entities/lK_Fee_Type')(sequelize);

//module.exports = sequelize;
module.exports = {
  sequelize,
  lkCityModel,
  lkFreeTypeModel
};


