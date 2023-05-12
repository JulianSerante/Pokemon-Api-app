const getAllTypes = require('./getAllTypes');
const { Type } = require('../../db');

const saveTypes = async () => {
    try {
        const types = await getAllTypes()
        const savedTypes = await Type.bulkCreate(types)

        return savedTypes;

    } catch (error) {
        return { error: error.message }
    }

};


module.exports = saveTypes;