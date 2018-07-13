const Sequelize = require('sequelize');
const logger = require('../libs/logger');
const dbConConfig = require('../configuration');

const sequelize = new Sequelize(dbConConfig.db, dbConConfig.user, dbConConfig.pass, {
  dialect: 'mysql',
  host: "127.0.0.1",
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

const lookupModel = require('./entities/lookup')(sequelize);
const userModel = require('./entities/user')(sequelize);
const userPinModel = require('./entities/user-pin')(sequelize);
const userProfileModel = require('./entities/user-profile')(sequelize);
const userPositionModel = require('./entities/user-position')(sequelize);
const userSkillModel = require('./entities/user-skills')(sequelize);

module.exports = {
  sequelize,
  lookupModel,
  userModel,
  userPinModel,
  userProfileModel,
  userPositionModel,
  userSkillModel

};


