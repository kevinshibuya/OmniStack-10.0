const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-0g2sc.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

// HTTP Methods: POST, GET, PUT, DELETE.

// Parameters types:

// Query Params: req.query (filtros, ordenação, paginação...)
// Route Params: req.params (identificar um recurso na alteração ou remoção.)
// Body: req.body (dados para a criação ou alteração de registros.)

app.use(routes);

app.listen(3333);