const Sequelize = require('sequelize');

module.exports = (sequelize) => {

  const lookup = sequelize.define('lookup',
    {
      title: Sequelize.STRING,
      type: Sequelize.INTEGER
    },
    {
      createdAt: false,
      updatedAt: false,
      tableName: 'lookup'
    });

  return lookup;
};