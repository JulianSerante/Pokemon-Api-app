const { Pokemon, Type } = require('../../db');

const getPokemonFromDBById = async (id) => {
    const pokemonDB = await Pokemon.findOne({
        where: {
          id: id,
        }
    })

        if(pokemonDB){
            const pokemon = {
                id: pokemonDB.id,
                name: pokemonDB.name,
                sprites: pokemonDB.sprites,
                hp: pokemonDB.hp,
                attack: pokemonDB.attack,
                defense: pokemonDB.defense,
                speed: pokemonDB.speed,
                height: pokemonDB.height,
                weight: pokemonDB.weight,
            }
            const types = await pokemonDB.getTypes();
            pokemon.types = types.map(type => type.name);
            return pokemon;
        }
    return null;
    }


module.exports = getPokemonFromDBById;