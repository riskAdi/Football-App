const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');
const router = express.Router();
const randomeString = require('randomstring');
const path = require('path');

function create(services) {

  router.post('/validate', asyncWrapper(async (req, res) => {

    try {

      console.log("user_id --", res.locals.jwt_decode.user_id, '---pin---', req.body.pin);
      const usersPin = await services.userServiceObj.validateUserPin({ pin: req.body.pin, user_id: res.locals.jwt_decode.user_id });
      if (usersPin != null) {

        if (usersPin.hash == req.body.hash) {
          res.status(200);
          res.json({ flag: true, message: 'Successful validate.' });

        } else {
          res.status(400);
          res.json({ flag: false, message: 'Invalid request.' });
        }

      } else {
        res.status(400);
        res.json({ flag: false, message: 'Your pincode is not valid.' });
      }

    } catch (err) {
      await Promise.reject(err);
    }
  }));

  router.get('/users', asyncWrapper(async (req, res) => {


    try {

      const users = await services.userServiceObj.allUsers();
      if (users != null) {
        res.send(200);
        res.json(users);
      } else {
        res.status(400);
        res.json({ message: 'Your pincode is not valid.' });
      }

    } catch (err) {
      await Promise.reject(err);
    }
  }));

  router.post('/profile', asyncWrapper(async (req, res) => {

    req.body.user_id = res.locals.jwt_decode.user_id;

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

  router.post('/upload', asyncWrapper(async (req, res) => {

    console.log("----------------");
    console.log(res.locals.jwt_decode.user_id);
    console.log("----------------");
    
    var image = req.body.image;
    var imagebase64 = image.split(',');
    imagebase64 = imagebase64[imagebase64.length - 1];
    const imageName = randomeString.generate()+ ".png";
    
    require("fs").writeFile(path.dirname(require.main.filename)+'/public/'+imageName, imagebase64, 'base64', function (err) {
    
      const userProfile = services.userServiceObj.updateUserProfile({user_id:res.locals.jwt_decode.user_id, profile: imageName }).then(function (resp) {
        res.send(resp);
      }).catch(function (err) {
        res.send(err);
      });

    });
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