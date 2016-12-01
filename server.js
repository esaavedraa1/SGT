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

var Sgt_moneda_tipoSchema = mongoose.Schema({
    monet_id : Number,
    monet_nombre : String,
    monet_codigo: String,
    monet_pais: String
})
var Sgt_moneda_tipo = mongoose.model('SGT_MONEDA_TIPO',Sgt_moneda_tipoSchema)


app.get('/listar', function(req, res){
    Sgt_moneda_tipo.find({}, function(error, monedas_tipo){
        if(error){
            res.json('Error.');
            console.log('error 877');
        }else{
            res.json(monedas_tipo);
            console.log(monedas_tipo);

        }
    })
});

app.get('/recuperar', function(req, res){
    Sgt_moneda_tipo.findById(req.query._id, function(error, documento){
        if(error){
            res.send('Error.');
        }else{
            res.send(documento);
        }
    });
});

app.post('/guardar', function(req, res){
    if(req.query._id == null){
        //Inserta
        var sgt_moneda_tipo = new Sgt_moneda_tipo({
            monet_id: req.query.monet_id,
            monet_nombre: req.query.monet_nombre,
            monet_codigo: req.query.monet_codigo,
            monet_pais: req.query.monet_pais
        });
        cliente.save(function(error, documento){
            if(error){
                res.send('Error.');
            }else{
                res.send(documento);
            }
        });
    }else{
        //Modifica
        Sgt_moneda_tipo.findById(req.query._id, function(error, documento){
            if(error){
                res.send('Error.');
            }else{
                var cliente = documento;
                sgt_moneda_tipo.monet_id = req.query.monet_id,
                    sgt_moneda_tipo.monet_nombre = req.query.monet_nombre,
                    sgt_moneda_tipo.monet_codigo = req.query.monet_codigo,
                    sgt_moneda_tipo.monet_pais = req.query.monet_pais
                sgt_moneda_tipo.save(function(error, documento){
                    if(error){
                        res.send('Error.');
                    }else{
                        res.send(documento);
                    }
                });
            }
        });
    }
});

app.post('/eliminar', function(req, res){
    Sgt_moneda_tipo.remove({_id: req.query._id}, function(error){
        if(error){
            res.send('Error.');
        }else{
            res.send('Ok');
        }
    });
});


app.get('/', function(req, res){
    res.sendfile('index.html');
});
//Escucha en el puerto 8080 y corre el server
app.listen(8080, function() {
    console.log('App listening on port 8080');
});