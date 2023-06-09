const getAllTypes = require('./getAllTypes');
const { Type } = require('../../db');

const saveTypes = async () => {

        const types = await getAllTypes()
        const savedTypes = await Type.bulkCreate(types)
        return savedTypes;

};


module.exports = saveTypes;