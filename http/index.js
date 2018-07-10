
const express = require('express');
var app = express();

/* ** App Routes ** */
const userRoute = require('./routes/user');
const lookupRoute = require('./routes/lookup');

/* ** App Request Validation Models ** */
const validate = require('../libs/reqValidate');
const validationModels = require('../request_models_validation');

module.exports = (services) => {

  /*   **** user routes  ****  */
  const user = userRoute.create(services);
  app.use('/users', user);

  /*   **** lookup routes  ****  */
  const lookup = lookupRoute.create(services, validate, validationModels);
  app.use('/lookups', lookup);

  return app;
};

