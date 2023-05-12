const { Pokemon } = require('../../db');
const getPokemonFromAPI = require('./getPokemonFromAPI')

const getPokemon = async () => {
    try {
        const pokemonDB = await Pokemon.findAll()

        const pokemonAPI = await getPokemonFromAPI()

        return [...pokemonDB, ...pokemonAPI];

    } catch (error) {
        return({ error: error.message });
    }

};


module.exports = getPokemon;