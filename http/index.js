
const express = require('express');
const bodyParser = require('body-parser');
var app = express();
const CST = require('../constatns/constants');
const jwt = require("jsonwebtoken");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* ** App Routes ** */
const userRoute = require('./routes/user');
const lookupRoute = require('./routes/lookup');
const phoneRoute = require('./routes/phone');

/* ** App Request Validation Models ** */
const validate = require('../libs/reqValidate');
const validationModels = require('../request_models_validation');

function isLoggedIn(req, res, next) {
  // check header or url parameters or post parameters for token

  console.log(res.body);
  if (req.headers && req.headers.authorization) {
    var token = req.headers.authorization;
    // decode token
    if (token) {
      // verifies secret.
      jwt.verify(token, CST.JWT_SECRET, function (err, decoded) {
        if (err) {
          return res.status(401).send({
            success: false,
            message: 'invalid token.'
          });
        } else {
          // if everything is good, save to request for use in other routes
          console.log(decoded);
          res.locals.jwt_decode = decoded;
          next();
        }
      });
    } else {
      // if there is no token
      // return an error
      return res.status(401).send({
        success: false,
        message: 'Invalid request.'
      });
    }
  } else {

    return res.status(401).send({
      success: false,
      message: 'Invalid request.'
    });
  }
}

module.exports = (services) => {

  /*   **** phone register routes  ****  */
  const phone = phoneRoute.create(services, validate, validationModels);
  app.use('/profile', phone);

  /*   **** user routes  ****  */
  const user = userRoute.create(services);
  app.use('/users', isLoggedIn, user);

  /*   **** lookup routes  ****  */
  const lookup = lookupRoute.create(services, validate, validationModels);
  app.use('/lookups', isLoggedIn, lookup);

  return app;
};

