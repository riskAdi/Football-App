'use strict';
const Joi = require('joi');
/** Filter Universities */
exports.filterUniv = {
  query: {
    q: Joi.number().integer().min(1).required()
  }
};




/** post feeStructure */
exports.postUser = {

  options: { allowUnknownBody: false },
  body: {
    phone: Joi.string().min(5).required(),
    email: Joi.string().min(5).required(),
    type: Joi.number().integer().min(1).required()
  }
};

