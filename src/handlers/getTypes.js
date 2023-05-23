const { Type } = require('../db');

const saveTypes = require('../controllers/getTypes/saveTypes');

const getTypesHandler = async (req, res) => {
    try {
        const types = await Type.findAll();
        if(!types.length){
            const savedTypes = await saveTypes();
            return res.status(200).json(savedTypes);
        } else {
            return res.status(200).json(types);
        }

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = getTypesHandler;