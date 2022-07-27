const { Recipe } = require('../models/models');

module.exports.index = async(req, res) => {
    const recipes = await Recipe.find({});
    res.render('recipes', { recipes })
}

module.exports.createRecipe = async(req, res) => {
    const recipe = new Recipe();
    recipe.name = req.body.title;
    recipe.directions = req.body.description;
    if(req.body.url) {
        recipe.url = req.body.url;
    }
    recipe.notes = req.body.notes;
    await recipe.save();
    res.redirect('/recipes');
}
        
module.exports.deleteRecipe = async(req, res) => {
    await Recipe.findByIdAndDelete(req.params.id);
    res.redirect('/recipes');
}

module.exports.starRecipe = async(req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    if(recipe.favorite) {
        await Recipe.updateOne({_id: req.params.id}, { favorite: false });   
    }
    else {
        await Recipe.updateOne({_id: req.params.id}, { favorite: true });
    }
    res.redirect('/recipes');
}

module.exports.updateRecipe = async(req, res) => {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id);
    recipe.name = req.body.title;
    recipe.directions = req.body.description;
    if(req.body.url) {
        recipe.url = req.body.url;
    }
    await recipe.save();
    res.redirect('/recipes');
}
