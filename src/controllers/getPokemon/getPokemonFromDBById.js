const { Pokemon, Type } = require('../../db');

const getPokemonFromDBById = async (id) => {

        const pokemonDB = await Pokemon.findOne({
          where: {
            id: id,
          },
          include: {
            model: Type,
            attributes: ['name'],
          },
        });

         return pokemonDB;
    }


module.exports = getPokemonFromDBById;