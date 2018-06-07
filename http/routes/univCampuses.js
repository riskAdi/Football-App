
const express           = require('express');
const asyncWrapper      = require('../utils/asyncWrapper');

const router = express.Router();

function create(services,validate,validationModels) {

    router.get('/list', validate(validationModels.filterUniv),asyncWrapper(async (req, res) => {
        
            const univList = await services.univServiceObj.getUnivList(req.query.q);
            res.json(univList);
    }));


    router.get('/compuslist', validate(validationModels.filterUnivCampus),asyncWrapper(async (req, res) => {
        
            const univList = await services.univServiceObj.getUnivCampuses(req.query.q);
            res.json(univList);
    }));

    router.post('/fee', validate(validationModels.filterUnivCampus),asyncWrapper(async (req, res) => {
        
        const univList = await services.univServiceObj.getUnivCampuses(req.query.q);
        res.json(univList);
}));

    return router;
  }
  
  module.exports.create = create;