const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
// Middleware pour parser le JSON
app.use(express.json());
// Middleware pour gérer les CORS
app.use(cors());
//connexion a la base de données
mongoose.connect(process.env.DATABASECLOUD)
    .then(() => console.log('Connected to Database'))
    .catch(err => {console.error('Error connecting to Database:', err);
    process.exit()});


app.use('/api/categories', require('./routes/categorie.route'));
app.use("/api/scategories",require('./routes/scategorie.route'))
app.use("/api/articles",require('./routes/article.route'))
app.use("/api/users",require('./routes/user.route'))


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
module.exports = app;