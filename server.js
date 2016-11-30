/**
 * Created by Eric Saavedra on 30-11-2016.
 */
    //server.js

var express     = require('express');
var app         = express();
var mongoose     = require('mongoose');

// Conexión con la base de datos
mongoose.connect('mongodb://localhost:27017/SGT');

// Configuración
app.configure(function() {
    // Localización de los ficheros estaticos
    app.use(express.static(__dirname ));
    // Muestra un log de todos los request en la consola
    app.use(express.logger('dev'));
    // Permite cambiar el HTML con el método POST
    app.use(express.bodyParser());
    // Simula DELETE y PUT
    app.use(express.methodOverride());
});

// Escucha en el puerto 8080 y corre el server
app.listen(8080, function() {
    console.log('App listening on port 8080');
});