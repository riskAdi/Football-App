
function create(dbSequelize,op) {

    /* show univ list on like q result */
    async function getUnivList(q) {

       /* show only top 10 with match */
      const univList = await dbSequelize.universityModel.findAll(
                                {
                                    where: { univ:{[op.like]:'%'+q+'%'}},
                                    offset: 0,
                                    limit: 10
                                });
      return univList;
    }


    async function getUnivCampuses(univ_id) {

        /*  assosciations **/
       dbSequelize.universityCampusModel.belongsTo(dbSequelize.lkCityModel,{foreignKey: 'city'});
       const univCampusList     = await dbSequelize.universityCampusModel.findAll(
                                 {
                                    include : [
                                        { 
                                          model: dbSequelize.lkCityModel, 
                                          required: true,
                                          attributes: ['title']
                                        }
                                      ], 
                                    where: {univ_id:univ_id},
                                    attributes: ['id','address']
                                 });
       return univCampusList;
     }
  
    return {
        getUnivList,
        getUnivCampuses
    };
  }

module.exports.create = create;