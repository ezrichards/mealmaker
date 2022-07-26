const { GroceryList } = require('../models/models');

module.exports.index = async(req, res) => {
    const list = await GroceryList.find({});
    res.render('list', { list })
}
