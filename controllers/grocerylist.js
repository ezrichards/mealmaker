const { GroceryList } = require('../models/models');

module.exports.index = async(req, res) => {
    const groceryLists = await GroceryList.find({});
    let groceryList = groceryLists[0];

    // create a grocery list if one doesn't exist already
    if(groceryLists.length == 0) {
        groceryList = new GroceryList();
        await groceryList.save();
    }
    res.render('list', { groceryList })
}

module.exports.updateList = async(req, res) => {
    const groceryLists = await GroceryList.find({});
    const groceryList = groceryLists[0];

    let newList = []
    for(var item of groceryList.list) {
        newList.push(item);
    }
    
    listItem = {
        "amount": req.body.amount,
        "ingredient": req.body.grocery,
    }
    newList.push(listItem);
    
    groceryList.list = newList;
    await groceryList.save();
    res.redirect('/list')
}

module.exports.clearList = async(req, res) => {
    const groceryLists = await GroceryList.find({});
    const groceryList = groceryLists[0];
    groceryList.list = [];
    await groceryList.save();
    res.redirect('/list')
}
