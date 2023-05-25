const { Router } = require('express');
const pokemonRouter = Router();
const { getPokemonHandler, getPokemonByIdHandler, getPokemonByNameHandler } = require('../handlers/getPokemonsHandlers'); 
const postPokemonHandler = require('../handlers/postPokemonHandler');

const validate = (req, res, next) => {
    const {name, image, hp, attack, defense, speed, height, weight, typeIds} = req.body;
    if(!name || !image || !hp || !attack || !defense || !typeIds)
    return res.status(400).json('Faltan datos del Pokemon');
    next();
}

pokemonRouter.get('/', getPokemonHandler);

pokemonRouter.get('/name', getPokemonByNameHandler);

pokemonRouter.get('/:idPokemon', getPokemonByIdHandler)

pokemonRouter.post('/', validate, postPokemonHandler)

module.exports = pokemonRouter;