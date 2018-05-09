const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');
const router = express.Router();

function create(services) {

    router.get('/feesType', asyncWrapper(async (req, res) => {
      
        const feesTypesList = await services.lookupServiceObj.getFeesType();
        res.json(feesTypesList);
    }));

    router.get('/allCities', asyncWrapper(async (req, res) => {
      
        const levelsList = await services.lookupServiceObj.getAllCities();
        res.json(levelsList);
    }));
  
    return router;
  }
  
  module.exports.create = create;