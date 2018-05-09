function create(sequelize) {
    async function getAllUsers() {
      const users = await sequelize.query('SELECT * FROM lk_level', { raw: true });
      return users;
    }
  
    return {
      getAllUsers
    };
  }


module.exports.create = create;