const { Recipe, GroceryList } = require('../models/models');

module.exports.index = async(req, res) => {
    const recipes = await Recipe.find({});
    const groceryList = await GroceryList.find({});
    const data = {
        recipes: recipes,
        groceryList: groceryList
    }
    res.render('home', data)
}
