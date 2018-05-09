
function create(dbSequelize) {

    async function getFeesType() {

      const feesTypesList = await dbSequelize.lkFreeTypeModel.findAll();
      return feesTypesList;
    }

    async function getAllLevels() {

        const feesTypesList = await dbSequelize.lkFreeTypeModel.findAll();
        return feesTypesList;
    }

    async function getAllCities() {

        const feesTypesList = await dbSequelize.lkCityModel.findAll();
        return feesTypesList;
    }
  
    return {
    
        getFeesType,
        getAllCities
    };
  }


module.exports.create = create;