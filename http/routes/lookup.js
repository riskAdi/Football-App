const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');
const router = express.Router();

function create(services,validate,validationModels) {

    router.get('/feesType', asyncWrapper(async (req, res) => {
      
        const feesTypesList = await services.lookupServiceObj.getFeesType();
        res.json(feesTypesList);
    }));

    router.get('/allCities', asyncWrapper(async (req, res) => {
      
        const levelsList = await services.lookupServiceObj.getAllCities();
        res.json(levelsList);
    }));

    router.get('/allLevels', asyncWrapper(async (req, res) => {
      
        const levelsList = await services.lookupServiceObj.getAllLevels();
        res.json(levelsList);
    }));

    router.get('/courseLevels', validate(validationModels.filterCourseLevel),asyncWrapper(async (req, res) => {
      
        const levelsList = await services.lookupServiceObj.getCourseLevels(req.query.q,req.query.level_id);
        res.json(levelsList);
    }));
  
    return router;
  }
  
  module.exports.create = create;