const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Thing = require('./models/thing');

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

// Ne pas oublier d'enlever les guillemets autour de la chaîne de connexion et de remplacer les valeurs par les bonnes valeurs pour votre base de données MongoDB Atlas

mongoose.connect('mongodb+srv://LucasP6:LucasBA@piiquante.nlr8y7x.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use (express.json());

app.use ('/api/stuff', stuffRoutes);
app.use ('/api/auth', userRoutes);

// app.use(bodyParser.json());

module.exports = app;