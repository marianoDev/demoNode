const { Router } = require('express');
const { check } = require('express-validator');
const { fetch, save } = require('../controllers/recipe');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validarJwt');

const routerRecipe = Router();

// http://localhost:8081/api/recipes/save
routerRecipe.put('/save', [
    // validarJWT,
    validarCampos
], save)

// http://localhost:8081/api/recipes/fetch
routerRecipe.get('/fetch', [
    // validarJWT,
    validarCampos
], fetch)

module.exports = {
    routerRecipe
}