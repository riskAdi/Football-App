const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');
const router = express.Router();

function create(services) {

    router.get('/', asyncWrapper(async (req, res) => {
      const users = await services.cityCampusServiceObj.getAllUsers();
      res.json(users);
     
    }));
  
    return router;
  }
  
  module.exports.create = create;