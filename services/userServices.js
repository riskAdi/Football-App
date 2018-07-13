
function create(dbSequelize, op) {

    async function addUser(payLoad) {
        const createUser = await dbSequelize.userModel.create(payLoad);
        return createUser;
    }

    async function updateUserProfile(payLoad) {

        const userProfile = await dbSequelize.userProfileModel.findOne({ where: { user_id: payLoad.user_id }, raw: true });
        if (userProfile != null) {
            const updateProfile = await dbSequelize.userProfileModel.update(
                { profile: payLoad.profile },
                { where: { user_id: payLoad.user_id } }
            );
        } else {
            const userProfile = await dbSequelize.userProfileModel.create(payLoad);
        }

        return userProfile;
    }

    async function findPhoneExist(payLoad) {

        const finePhone = await dbSequelize.userModel.findOne({ where: { phone: payLoad.phone }, raw: true });
        return finePhone;
    }

    async function allUsers() {
        const userList = await dbSequelize.sequelize.query("SELECT * FROM users,user_profile where users.id = user_profile.user_id ", { type: dbSequelize.sequelize.QueryTypes.SELECT });
        const count = await dbSequelize.sequelize.query("SELECT COUNT(users.id) as count FROM users,user_profile where users.id = user_profile.user_id ", { type: dbSequelize.sequelize.QueryTypes.SELECT });

        return { rows: userList, recordsTotal: count[0].count, recordsFiltered: count[0].count };
    }

    async function addUserPin(payLoad) {
        const createUserPin = await dbSequelize.userPinModel.create(payLoad);
        return createUserPin;
    }

    async function addUserProfile(payLoad) {

        const userProfile = await dbSequelize.userProfileModel.findOne({ where: { user_id: payLoad.user_id }, raw: true });
        if (userProfile == null) {
            const createUserProfile = await dbSequelize.userProfileModel.create(payLoad);
            return createUserProfile;

        } else {
            const updateProfile = await dbSequelize.userProfileModel.update(
                payLoad,
                { where: { user_id: payLoad.user_id } }
            );
            return updateProfile;
        }

    }

    async function addUserPosition(payLoad) {
        const createUserPosition = await dbSequelize.userPositionModel.create(payLoad);
        return createUserPosition;
    }

    async function addUserSkills(payLoad) {
        const createUserSkills = await dbSequelize.userSkillModel.create(payLoad);
        return createUserSkills;
    }

    async function validateUserPin(payLoad) {
        const createUserSkills = await dbSequelize.userPinModel.find({ where: { user_id: payLoad.user_id, pin: payLoad.pin }, raw: true });
        return createUserSkills;
    }

    return {
        addUser,
        addUserPin,
        addUserProfile,
        addUserPosition,
        addUserSkills,
        validateUserPin,
        allUsers,
        updateUserProfile,
        findPhoneExist
    };
}

module.exports.create = create;