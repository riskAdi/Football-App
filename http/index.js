const express = require('express');
var app = express();
const userRoute = require('./routes/user');
const lookupRoute = require('./routes/lookup');

module.exports = (services) => {
    
    const user = userRoute.create(services);
    app.use('/users', user);

    /*   **** lookup routes  ****  */
    const lookup = lookupRoute.create(services);
    app.use('/lookups', lookup);
    return app;
  };
  
