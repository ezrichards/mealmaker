const express = require('express');
const multer  = require('multer');
const router = express.Router();
const recipes = require('../controllers/recipes');
const upload = multer();

router.route('/').get(recipes.index).post(upload.none(), recipes.createRecipe);

router.route('/:id').get(recipes.index).put(upload.none(), recipes.starRecipe).delete(upload.none(), recipes.deleteRecipe);

router.route('/:id/edit').get(recipes.index).put(upload.none(), recipes.updateRecipe); 

module.exports = router;
