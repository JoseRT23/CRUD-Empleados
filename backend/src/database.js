const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean')
        .then((db) => console.log('db is conected'))
        .catch((err) => console.error(err));

