const { Schema, model } = require('mongoose');

const RecipeSchema = Schema({
   
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    ingredients: {
        type: [
            {
            amount: String,
            name: String
            }
        ],
        required: false
    },
    imagePath: {
        type: String,
        required: [true, 'Image Path is required'],
    }

});

module.exports = model( 'Recipe', RecipeSchema );