
function create ( dbSequelize, op) {

    async function getLookups(id) {
        const positionsList = await dbSequelize.lookupModel.findAll({ where: { type: id } });
        return positionsList;
    }
    return {getLookups};
}

module.exports.create = create;