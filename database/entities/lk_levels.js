const Sequelize = require('sequelize');

module.exports = (sequelize) => {

  const lk_level = sequelize.define('lkLevel',{ title: Sequelize.STRING},
  {
    createdAt: false,
    updatedAt:false,
    tableName: 'lk_level'
  });

  return lk_level;
};