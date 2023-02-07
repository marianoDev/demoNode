const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { singup, login } = require('../controllers/users');
const { emailExiste } = require('../helpers/db-validators');

const routerAuth = Router();

// LOGIN
routerAuth.post('/login', [
    check('email').isEmail(),
    check('password', 'la contraseña es obligatorio').not().isEmpty(),
    validarCampos
], login);

// SIGNUP
routerAuth.post('/signup', [
    check('email', 'El correo es obligatorio').isEmail().custom( emailExiste ),
    check('password', 'El password es requerido').not().isEmpty(),
    validarCampos
], singup);

module.exports = routerAuth ;