
const cityCampusService      = require('./cityCampusesServcice');
const lookupService          = require('./lookupServices');

module.exports = (dbSequelize) => {

    const cityCampusServiceObj = cityCampusService.create(dbSequelize.sequelize);
    const lookupServiceObj = lookupService.create(dbSequelize);
    return ({
        cityCampusServiceObj,
        lookupServiceObj
    });
  };
