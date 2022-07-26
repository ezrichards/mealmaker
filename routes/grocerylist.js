const express = require('express');
const router = express.Router();
const groceryList = require('../controllers/grocerylist');

router.route('/').get(groceryList.index);

module.exports = router;
