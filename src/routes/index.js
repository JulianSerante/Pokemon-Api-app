const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const mainRouter = Router();
const pokemonRouter = require('./pokemonRouter');
const typesRouter = require('./typesRouter');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRouter.use('/pokemons', pokemonRouter);

mainRouter.use('/types', typesRouter);

module.exports = mainRouter;
