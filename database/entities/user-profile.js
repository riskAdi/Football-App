const Sequelize = require('sequelize');

module.exports = (sequelize) => {

    const UserProfile = sequelize.define('user_profile',
        {
            user_id: Sequelize.INTEGER,
            first_name: Sequelize.STRING,
            last_name: Sequelize.STRING,
            gender: Sequelize.INTEGER,
            age: Sequelize.STRING,
            weight: Sequelize.STRING,
            height: Sequelize.STRING,
            pref_foot: Sequelize.INTEGER,
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: 'user_profile'
        });
        
    return UserProfile;
};