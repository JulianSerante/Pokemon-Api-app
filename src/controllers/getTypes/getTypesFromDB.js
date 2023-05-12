const { Type } = require('../../db');

const getTypesFromDB = async () => {
    try {
        const types = await Type.findAll();
        if(!types) throw new Error('No hay tipos en la Base de Datos');
        return types;
    } catch (error) {
        return { error: error.message };
    }
};

module.exports = getTypesFromDB;