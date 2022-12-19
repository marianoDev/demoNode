const {Router} = require('express');
const {check} = require('express-validator');
const {storeRecipes, fetchRecipes} = require('../controllers/recipes');
const {isAuthenticate} = require('../middlewares/db-validators');

const router = Router();

router.put('/', isAuthenticate, storeRecipes);
router.get('/', isAuthenticate, fetchRecipes);

module.exports = router;