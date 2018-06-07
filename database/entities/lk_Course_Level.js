const Sequelize = require('sequelize');

module.exports = (sequelize) => {

  const courseLevel = sequelize.define('CourseLevel',
  { 
      level_id:         Sequelize.INTEGER,
      course:           Sequelize.STRING,
      
 },
  {
    createdAt: false,
    updatedAt:false,
    tableName: 'lk_course_level'
  });

  return courseLevel;
};