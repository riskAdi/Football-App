const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');
const router = express.Router();

function create(services) {

    router.get('/list', asyncWrapper(async (req, res) => {
      
        const univList = await services.univServiceObj.getUnivList();
        res.json(univList);
    }));

    return router;

  }
  
  module.exports.create = create;