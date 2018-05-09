const express = require('express');
var app = express();

const userRoute     = require('./routes/user');
const lookupRoute   = require('./routes/lookup');
const UnivCampusRoute   = require('./routes/univCampuses');

module.exports = (services) => {

    const user = userRoute.create(services);
    app.use('/users', user);

    /*   **** lookup routes  ****  */
    const lookup = lookupRoute.create(services);
    app.use('/lookups', lookup);

    /*   **** univ campuses routes  ****  */
    const univCampus = UnivCampusRoute.create(services);
    app.use('/univ', univCampus);

    return app;
  };
  
