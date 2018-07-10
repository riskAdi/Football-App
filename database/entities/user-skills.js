const Sequelize = require('sequelize');

module.exports = (sequelize) => {

    const UserSkills = sequelize.define('user_skills',
        {
            user_id: Sequelize.INTEGER,
            skills: Sequelize.STRING
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: 'user_skills'
        });
    return UserSkills;
};