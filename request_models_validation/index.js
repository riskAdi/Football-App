'use strict';
const Joi = require('joi');
/** Filter Universities */
exports.filterUniv = {
    query: {
      q: Joi.string().min(3).required()
    }
  };

/** Filter UnivCampus list */
exports.filterUnivCampus = {
    query: {
      q: Joi.string().min(1).required()
    }
  };

  /** Filter Course Level */
exports.filterCourseLevel = {
    query: {
      q:        Joi.string().min(3).required(),
      level_id: Joi.number().integer().min(1).required()
    }
  };

  /** post feeStructure */
exports.postFeeStructure = {

    options: { allowUnknownBody: false },
    body: {
        univ_id:    Joi.number().integer().min(1).required(),
        fee_type:   Joi.number().integer().min(1).required(),
        level_id:   Joi.number().integer().min(1).required(),
        rs:         Joi.string().min(3).required()
    }
    
  };

