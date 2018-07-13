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
            const isUserExist = await services.userServiceObj.findPhoneExist(postPayLoad);
            if (isUserExist == null) {

                const users = await services.userServiceObj.addUser(postPayLoad);
                const userPin = await services.userServiceObj.addUserPin({ user_id: users.dataValues.id, pin: gpc(5), hash: hashString, ip: req.connection.remoteAddress });
                const nexmo = new Nexmo({
                    apiKey: '9028ad8f',
                    apiSecret: 'ae4fb7a518fa2afc'
                });
                const from = 'App';
                const to = postPayLoad.phone;
                const text = 'Your App activation code is ' + userPin.dataValues.pin + '.';
                // nexmo.message.sendSms(from, to, text);
                res.json({ token: jwt.sign({ user_id: users.dataValues.id, phone: postPayLoad.phone }, CST.JWT_SECRET), hash: hashString });

            } else {
 
                const userPin = await services.userServiceObj.addUserPin({ user_id: isUserExist.id, pin: gpc(5), hash: hashString, ip: req.connection.remoteAddress });
                const nexmo = new Nexmo({
                    apiKey: '9028ad8f',
                    apiSecret: 'ae4fb7a518fa2afc'
                });
                const from = 'App';
                const to = postPayLoad.phone;
                const text = 'Your App activation code is ' + userPin.dataValues.pin + '.';
                // nexmo.message.sendSms(from, to, text);
                res.json({ token: jwt.sign({ user_id: isUserExist.id, phone: postPayLoad.phone }, CST.JWT_SECRET), hash: hashString });

            }

        } catch (err) {
            await Promise.reject(err);
        }
    }));



    return router;
}

module.exports.create = create;