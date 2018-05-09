
const cityCampusService      = require('./cityCampusesServcice');
const lookupService          = require('./lookupServices');
const universityService      = require('./univCampusesService');

module.exports = (dbSequelize) => {

    const cityCampusServiceObj  = cityCampusService.create(dbSequelize.sequelize);
    const lookupServiceObj      = lookupService.create(dbSequelize);
    const univServiceObj        = universityService.create(dbSequelize);
    
    return ({
        cityCampusServiceObj,
        lookupServiceObj,
        univServiceObj,
    });
  };
