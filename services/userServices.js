
function create(dbSequelize, op) {

    async function addUser(payLoad) {
        const createUser = await dbSequelize.userModel.create(payLoad);
        return createUser;
    }

    async function addUserPin(payLoad) {
        const createUserPin = await dbSequelize.userPinModel.create(payLoad);
        return createUserPin;
    }

    async function addUserProfile(payLoad) {
        const createUserProfile = await dbSequelize.userProfileModel.create(payLoad);
        return createUserProfile;
    }

    async function addUserPosition(payLoad) {
        const createUserPosition = await dbSequelize.userPositionModel.create(payLoad);
        return createUserPosition;
    }

    async function addUserSkills(payLoad) {
        const createUserSkills = await dbSequelize.userSkillModel.create(payLoad);
        return createUserSkills;
    }

    return {
        addUser,
        addUserPin,
        addUserProfile,
        addUserPosition,
        addUserSkills
    };
}

module.exports.create = create;