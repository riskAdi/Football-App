const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');
const router = express.Router();

function create(services) {

  router.post('/validate', asyncWrapper(async (req, res) => {

    try {

      const usersPin = await services.userServiceObj.validateUserPin({ pin: req.body.pin, user_id: res.locals.jwt_decode.user_id });
      if (usersPin != null) {

        if (usersPin.hash == req.body.hash) {
          res.status(200);
          res.json({ message: 'Successful validate.' });

        } else {
          res.status(400);
          res.json({ message: 'Invalid request.' });
        }

      } else {
        res.status(400);
        res.json({ message: 'Your pincode is not valid.' });
      }

    } catch (err) {
      await Promise.reject(err);
    }
  }));

  router.post('/profile', asyncWrapper(async (req, res) => {

    req.body.user_id  = res.locals.jwt_decode.user_id;

    try {
      const userProfile = await services.userServiceObj.addUserProfile(req.body);
      res.json(userProfile);

    } catch (err) {
      await Promise.reject(err);
    }
  }));

  router.post('/positions', asyncWrapper(async (req, res) => {

    console.log("----------------");
    console.log(res.locals.jwt_decode.user_id);
    console.log(req.body);
    console.log("----------------");
    
    try {
      const userProfile = await services.userServiceObj.addUserPosition(
        {
          user_id: 14,
          position: 2
        });

      res.json(userProfile);

    } catch (err) {
      await Promise.reject(err);
    }
  }));

  router.get('/skills', asyncWrapper(async (req, res) => {

    try {
      const userProfile = await services.userServiceObj.addUserSkills(
        {
          user_id: 14,
          skills: 2
        });

      res.json(userProfile);

    } catch (err) {
      await Promise.reject(err);
    }
  }));

  return router;
}


//addUserProfile

module.exports.create = create;