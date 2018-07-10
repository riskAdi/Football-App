const Sequelize = require('sequelize');

module.exports = (sequelize) => {

    const UserPosition = sequelize.define('user_position',
        {
            user_id: Sequelize.INTEGER,
            position: Sequelize.STRING
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: 'user_position'
        });
    return UserPosition;
};