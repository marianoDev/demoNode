const Recipe = require('../models/recipe')

// Obtener Recetas

const fetch = async (req, res) => {
    
    try {
        const recipes = await Recipe.find();
        res.json(recipes)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error');
    }

}

// Guardar Recetas

const save = async(req, res = response) => {

    try {
		const recipes = req.body;

		console.log('Recetas:', recipes)
		await Recipe.deleteMany({});

		recipes.forEach(async element => {
			const recipe = new Recipe(element);
			await recipe.save();
		});

		res.status(200).json({
			msg: "Recetas guardadas"
		}); 

	} catch (error) {
		console.log(error);

		res.status(500).json({
			msg: "ERROR, ponganse en contacto con el administrador"
		});
	}
}

module.exports = {
    fetch,
    save
}