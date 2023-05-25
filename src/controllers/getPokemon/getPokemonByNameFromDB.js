const { Pokemon, Type } = require ('../../db')

const getPokemonByNameFromDB = async (name) => {
    const pokemonDB = await Pokemon.findOne({
      where: {
        name: name.toLowerCase()
      },
      include: {
        model: Type,
        attributes: ['name'],
      },
    });
    console.log(pokemonDB);
    return pokemonDB;
  };
  
  module.exports = getPokemonByNameFromDB;
  
  