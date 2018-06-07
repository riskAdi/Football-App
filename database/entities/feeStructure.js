const Sequelize = require('sequelize');

module.exports = (sequelize) => {

  const feeStructure = sequelize.define('FeeStructure',
  { 
    univ_id:            Sequelize.INTEGER,
    campus_id:          Sequelize.INTEGER,
    fee_type:           Sequelize.INTEGER,
    course_id:          Sequelize.INTEGER,
    level_id:           Sequelize.INTEGER,
    rs:                 Sequelize.STRING,  
 },
  {
    createdAt: false,
    updatedAt:false,
    tableName: 'fee_structure'
  });

  return feeStructure;
};