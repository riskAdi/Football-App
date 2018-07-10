const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');
const router = express.Router();
const randomeString = require('randomstring');
const gpc = require('generate-pincode');

function create(services) {

  router.get('/', asyncWrapper(async (req, res) => {

    try {
      const users = await services.userServiceObj.addUser({ phone: '923337707133', email: 'aak@zap.com', type: 1, status: 1 });
      const userPin = await services.userServiceObj.addUserPin({ user_id: users.dataValues.id, pin: gpc(5), hash: randomeString.generate(), ip: req.connection.remoteAddress });
      res.json(users);

    } catch (err) {
      await Promise.reject(err);
    }
  }));

  router.get('/profile', asyncWrapper(async (req, res) => {

    try {
      const userProfile = await services.userServiceObj.addUserProfile(
        {
          user_id: 14,
          first_name: 'Amjad',
          last_name: 'akram',
          gender: 1, age: '12',
          weight: '55',
          height: '7 inc',
          pref_foot: 2
        });

      res.json(userProfile);

    } catch (err) {
      await Promise.reject(err);
    }
  }));

  router.get('/positions', asyncWrapper(async (req, res) => {

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