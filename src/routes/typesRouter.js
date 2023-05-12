const { Router } = require('express');
const typesRouter = Router();
const getTypes = require('../handlers/getTypes');

typesRouter.get('/', getTypes)

module.exports = typesRouter;