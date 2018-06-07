const Sequelize = require('sequelize');
const op = Sequelize.Op;

const cityCampusService      = require('./cityCampusesServcice');
const lookupService          = require('./lookupServices');
const universityService      = require('./univCampusesService');

module.exports = (dbSequelize) => {

    const cityCampusServiceObj  = cityCampusService.create(dbSequelize.sequelize);
    const lookupServiceObj      = lookupService.create(dbSequelize,op);
    const univServiceObj        = universityService.create(dbSequelize,op);
    
    return ({
        cityCampusServiceObj,
        lookupServiceObj,
        univServiceObj,
    });
  };
