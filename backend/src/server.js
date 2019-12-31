const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://onmistack:onmistack@cluster0-mzlt4.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);
app.listen(3030);
