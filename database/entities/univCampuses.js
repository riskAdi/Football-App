const Sequelize = require('sequelize');

module.exports = (sequelize) => {

  const univCampuses = sequelize.define('UniversityCampuses',
  { 
      univ_id:      Sequelize.INTEGER,
      city:         Sequelize.INTEGER,
      address:      Sequelize.STRING,
      contacts:     Sequelize.STRING
 },
  {
    createdAt: false,
    updatedAt:false,
    tableName: 'lk_univ_campuses'
  });

  return univCampuses;
};