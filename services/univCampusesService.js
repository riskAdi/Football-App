
function create(dbSequelize) {

    async function getUnivList() {

      const feesTypesList = await dbSequelize.universityModel.findAll();
      return feesTypesList;
    }

  //{ offset: 10, limit: 2 } name: { [Op.like]: '%ooth%' }
    return {
        getUnivList
    };
  }


module.exports.create = create;