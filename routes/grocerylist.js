const express = require('express');
const multer  = require('multer');
const router = express.Router();
const groceryList = require('../controllers/grocerylist');
const upload = multer();

router.route('/').get(groceryList.index).post(upload.none(), groceryList.updateList).delete(upload.none(), groceryList.clearList); 

module.exports = router;
