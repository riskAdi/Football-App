
function create(dbSequelize) {

    async function getUniv() {

      const feesTypesList = await dbSequelize.lkFreeTypeModel.findAll();
      return feesTypesList;
    }

  
    return {
    
        getFeesType,
        getAllCities
    };
  }


module.exports.create = create;