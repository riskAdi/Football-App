
function create (sequelize, op) {

    async function getLookups(id) {
        const positionsList = await sequelize.lookupModel.findAll({ where: { type: id } });
        return positionsList;
    }
    return {getLookups};
}

module.exports.create = create;