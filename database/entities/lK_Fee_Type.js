const Sequelize = require('sequelize');

module.exports = (sequelize) => {

        const lk_fee_type = sequelize.define('FeesType',{fees_title: Sequelize.STRING},
        {
            createdAt: false,
            updatedAt:false,
            tableName: 'lk_fees_type'
        });

    return lk_fee_type;
};