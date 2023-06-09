const { Router } = require('express');
const mainRouter = Router();
const pokemonRouter = require('./pokemonRouter');
const typesRouter = require('./typesRouter');


mainRouter.use('/pokemons', pokemonRouter);

mainRouter.use('/types', typesRouter);

module.exports = mainRouter;
