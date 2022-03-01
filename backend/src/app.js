const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.set('port',  5000);

//habilitar cors
app.use(cors({origin: "http://localhost:4200"}))

//Dependencia para ver peticiones en la consola
app.use(morgan('dev'));

//Entender objetos json
app.use(express.json());
//Entender datos desde un html
app.use(express.urlencoded({ extended: false}));


//Rutas empleado
app.use(require('./routes/employesRoute'))

module.exports = app;