const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');
const router = express.Router();

function create(services, validate, validationModels) {

    router.get('', asyncWrapper(async (req, res) => {
        const lookupList = await services.lookupServiceObj.getLookups(req.query.q);
        res.json(lookupList);
    }));
    return router;
}

module.exports.create = create;