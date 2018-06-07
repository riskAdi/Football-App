
function create(dbSequelize,op) {

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

    async function getAllLevels() {

        const allLevelList = await dbSequelize.lkLevelModel.findAll();
        return allLevelList;
    }

    async function getCourseLevels(q,level_id) {

        const courseList = await dbSequelize.lkCourseLevellModel.findAll(
                                {
                                    where: { 
                                            course:{[op.like]:'%'+q+'%'},
                                            level_id:level_id
                                            },
                                    offset: 0,
                                    limit: 10
                                });   
            
        return courseList;
    }
  
    return {
    
        getFeesType,
        getAllCities,
        getAllLevels,
        getCourseLevels
    };
  }


module.exports.create = create;