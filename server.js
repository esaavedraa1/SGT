/**
 * Created by Eric Saavedra on 30-11-2016.
 */
    //server.js

var express     = require('express');
var app         = express();
var mongoose     = require('mongoose');

// Conexión con la base de datos
mongoose.connect('mongodb://localhost:27017/SGT', function(error){
    if(error){
        throw error;
    }else{
        console.log('Conectado a MongoDB');
    }
});
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

var SGT_MONEDA_TIPO_schemma = mongoose.Schema({
    monet_id: {type: Number, required: true},
    monet_nombre: {type: String, required: true},
    monet_codigo: {type: String, required: true},
    monet_pais: {type: String, required: true}
});
var SGT_MONEDA_TIPO_model = mongoose.model('SGT_MONEDA_TIPO', SGT_MONEDA_TIPO_schemma);
    SGT_MONEDAS_TIPO.setModel(SGT_MONEDA_TIPO_model);

app.get('/SGT_MONEDAS_TIPO', SGT_MONEDAS_TIPO.index);
app.get('/SGT_MONEDAS_TIPO/create', SGT_MONEDAS_TIPO.create);
app.post('/SGT_MONEDAS_TIPO', SGT_MONEDAS_TIPO.store);
app.get('/SGT_MONEDAS_TIPO/:id', SGT_MONEDAS_TIPO.show);
app.get('/SGT_MONEDAS_TIPO/:id/edit', SGT_MONEDAS_TIPO.edit);
app.put('/SGT_MONEDAS_TIPO/:id', SGT_MONEDAS_TIPO.update);
app.delete('/SGT_MONEDAS_TIPO/:id', SGT_MONEDAS_TIPO.destroy);

//Escucha en el puerto 8080 y corre el server
app.listen(8080, function() {
    console.log('App listening on port 8080');
});