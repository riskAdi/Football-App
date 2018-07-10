const Sequelize = require('sequelize');

module.exports = (sequelize) => {

    const User = sequelize.define('users',
        {
            phone: Sequelize.STRING,
            email: Sequelize.STRING,
            type: Sequelize.INTEGER,
            status: Sequelize.INTEGER,
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: 'users'
        });
    return User;
};