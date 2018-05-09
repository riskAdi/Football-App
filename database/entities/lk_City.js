const Sequelize = require('sequelize');

module.exports = (sequelize) => {

  const lk_city = sequelize.define('lkCity',{ title: Sequelize.STRING},
  {
    createdAt: false,
    updatedAt:false,
    tableName: 'lk_city'
  });

  return lk_city;
};