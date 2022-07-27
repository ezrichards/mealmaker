const { Recipe, GroceryList } = require('../models/models');

module.exports.index = async(req, res) => {
    const recipes = await Recipe.find({});
    const groceryLists = await GroceryList.find({});
    const groceryList = groceryLists[0];
    res.render('home', { recipes, groceryList })
}
