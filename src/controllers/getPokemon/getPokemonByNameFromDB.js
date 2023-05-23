const { Pokemon } = require('../../db');

const getPokemonByNameFromDB = async (name) => {
    const pokemonDB = await Pokemon.findOne({
        where: {
          name: name.toLowerCase(),
        }
    })

        if(pokemonDB){
            const pokemon = {
                id: pokemonDB.id,
                name: pokemonDB.name,
                image: pokemonDB.image,
                hp: pokemonDB.hp,
                attack: pokemonDB.attack,
                defense: pokemonDB.defense,
                speed: pokemonDB.speed,
                height: pokemonDB.height,
                weight: pokemonDB.weight,
            }
            const types = await pokemonDB.getTypes();
            pokemon.typeId = types.map((type) => type.name);
            return pokemon;
        }
    return null;
    }

module.exports = getPokemonByNameFromDB;