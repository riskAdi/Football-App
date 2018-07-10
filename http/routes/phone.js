const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');
const router = express.Router();
const jwt = require("jsonwebtoken");
const CST = require('../../constatns/constants');
const randomeString = require('randomstring');
const gpc = require('generate-pincode');
const Nexmo = require('nexmo');

function create(services, validate, validationModels) {

    router.post('/create', asyncWrapper(async (req, res) => {

        var postPayLoad = req.body;
        postPayLoad.type = 1;
        postPayLoad.status = 1;

        try {
            const hashString = randomeString.generate();
            const users = await services.userServiceObj.addUser(postPayLoad);
            const userPin = await services.userServiceObj.addUserPin({ user_id: users.dataValues.id, pin: gpc(5), hash: hashString, ip: req.connection.remoteAddress });

           
            res.json({ token: jwt.sign({ user_id: users.dataValues.id, phone: postPayLoad.phone }, CST.JWT_SECRET), hash: hashString });

        } catch (err) {
            await Promise.reject(err);
        }
    }));
    return router;
}

module.exports.create = create;