const getPokemon = require('../controllers/getPokemon/getPokemon');
const getPokemonById = require('../controllers/getPokemon/getPokemonById');
const getPokemonFromDBById = require('../controllers/getPokemon/getPokemonFromDBById')
const getPokemonByName = require('../controllers/getPokemon/getPokemonByName');
const getPokemonByNameFromDB = require('../controllers/getPokemon/getPokemonByNameFromDB');

const getPokemonHandler = async (req, res) => {
    try {
        const pokemons = await getPokemon();

        return res.status(200).json(pokemons);
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}

const getPokemonByIdHandler = async (req, res) => {
    const { idPokemon } = req.params;
    try {
        let pokemon;

        const pokemonDB = await getPokemonFromDBById(idPokemon);

        pokemonDB ? pokemon = pokemonDB : pokemon = await getPokemonById(idPokemon);

        return res.status(200).json(pokemon);
        
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
}

const getPokemonByNameHandler = async (req, res) => {
    const { name } = req.query;
    console.log(name);
    try {
        let pokemon;

        const pokemonDB = await getPokemonByNameFromDB(name);

        pokemonDB ? pokemon = pokemonDB : pokemon = await getPokemonByName(name);

        if(!pokemon) throw new Error(`El Pokemon con nombre ${name} no existe`)

        return res.status(200).json(pokemon);
        
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
}


module.exports = {
    getPokemonHandler,
    getPokemonByIdHandler,
    getPokemonByNameHandler
}