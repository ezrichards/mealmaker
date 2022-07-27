const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    directions: {
        type: String,
    },
    url: {
        type: String,
    },
    ingredients: [{
        amount: String,
        type: String
    }],
    favorite: {
        type: Boolean,
        default: false
    }
});

const GroceryListSchema = new Schema({
    list: [{
        amount: Number,
        ingredient: String
    }]
});

module.exports = {
    Recipe: mongoose.model('Recipe', RecipeSchema),
    GroceryList: mongoose.model('GroceryList', GroceryListSchema),
};
