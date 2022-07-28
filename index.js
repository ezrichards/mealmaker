if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const app = express();
const methodOverride = require('method-override');
const mongoSanitize = require('express-mongo-sanitize');
const recipeRoutes = require('./routes/recipes');
const listRoutes = require('./routes/grocerylist');
const homeRoutes = require('./routes/home');

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/mealmaker';
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to database!")
});

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'))
app.use(mongoSanitize({
  replaceWith: '_'
}))

app.use('/recipes', recipeRoutes)
app.use('/list', listRoutes)
app.use('/', homeRoutes)

app.use((req, res, next) => {
  res.status(404).render('404');
})

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/recipes', (req, res) => {
  res.render('recipes');
})

app.get('/list', (req, res) => {
  res.render('list');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

