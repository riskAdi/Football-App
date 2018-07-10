const Sequelize = require('sequelize');
const op = Sequelize.Op;
const lookupService = require('./lookupServices');
const userService = require('./userServices');

module.exports = (dbSequelize) => {
    const lookupServiceObj = lookupService.create(dbSequelize, op);
    const userServiceObj = userService.create(dbSequelize, op);

    return ({
        lookupServiceObj,
        userServiceObj
    });
};
