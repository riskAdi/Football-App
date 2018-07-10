const Sequelize = require('sequelize');

module.exports = (sequelize) => {

    const UserPin = sequelize.define('users_pin',
        {
            user_id: Sequelize.INTEGER,
            pin: Sequelize.STRING,
            hash: Sequelize.STRING,
            ip: Sequelize.STRING
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: 'users_pin'
        });
    return UserPin;
};