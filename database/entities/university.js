const Sequelize = require('sequelize');

module.exports = (sequelize) => {

  const university = sequelize.define('University',
  
  { 
      univ:                      Sequelize.STRING,
      arts_humanity:             Sequelize.INTEGER,
      business_social_science:   Sequelize.INTEGER,
      lang_culture:              Sequelize.INTEGER,
      medicine:                  Sequelize.INTEGER,
      engineering:               Sequelize.INTEGER,
      cs:                        Sequelize.INTEGER,

 },
  {
    createdAt: false,
    updatedAt:false,
    tableName: 'lk_univ_offer_course'
  });

  return university;
};