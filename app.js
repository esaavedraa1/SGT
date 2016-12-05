/**
 * Created by Core i3 on 01-12-2016.
 */

/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();


// all environments
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

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

//Conexión a Mongoose.
var mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/SGTDB', function(error){
    if(error){
        throw error;
    }else{
        console.log('Conectado a MongoDB');
    }
});



var Sgt_moneda_tipoSchema = mongoose.Schema({
    monet_id: Number,
    monet_nombre: String,
    monet_codigo: String,
    monet_pais: String

});
var Sgt_moneda_tipo = mongoose.model('Sgt_moneda_tipo', Sgt_moneda_tipoSchema);
//-----------------------------------------------

var Sgt_monedaSchema = mongoose.Schema({
    monet_id: {type: Schema.ObjectId, ref:"Sgt_moneda_tipo"},
    mone_fecha: { type : Date, default: Date.now},
    mone_valor: String

});
var Sgt_moneda = mongoose.model('Sgt_moneda', Sgt_monedaSchema);



app.get('/Monedas_Tipo', function(req, res){
    res.sendfile('./public/index2.html');
});

app.get('/Monedas_Tipo/listar', function(req, res){
    Sgt_moneda_tipo.find({}, function(error, sgt_monedas_tipo){
        if(error){
            res.send('Error.');
        }else{
            res.send(sgt_monedas_tipo);
        }
    })
});

app.get('/Monedas_Tipo/recuperar', function(req, res){
    Sgt_moneda_tipo.findById(req.query._id, function(error, sgt_monedas_tipo){
        if(error){
            res.send('Error.');
            console.log("Error en la recuperacion")
        }else{
            res.send(sgt_monedas_tipo);
            console.log(sgt_monedas_tipo)
        }
    });
});

app.post('/Monedas_Tipo/guardar', function(req, res){
    if(req.query._id == null){
        //Inserta
        var sgt_moneda_tipo = new Sgt_moneda_tipo({
            monet_id: req.query.monet_id,
            monet_nombre: req.query.monet_nombre,
            monet_codigo: req.query.monet_codigo,
            monet_pais: req.query.monet_pais
        });
        sgt_moneda_tipo.save(function(error, documento){
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
                var sgt_moneda_tipo = documento;
                sgt_moneda_tipo.monet_id = req.query.monet_id,
                    sgt_moneda_tipo.monet_nombre= req.query.monet_nombre,
                    sgt_moneda_tipo.monet_codigo= req.query.monet_codigo,
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

app.post('/Monedas_Tipo/eliminar', function(req, res){
    Sgt_moneda_tipo.remove({_id: req.query._id}, function(error){
        if(error){
            res.send('Error.');
        }else{
            res.send('Ok');
        }
    });
});

//--------------------------------------------------------

//--------------------------------------------------------
app.get('/Monedas', function(req, res){
    res.sendfile('./public/index2.html');
});

app.get('/Monedas/listar', function(req, res){
    Sgt_moneda.find({}, function(error, sgt_monedas){
        if(error){
            res.send('Error en listar las Monedas');
        }else{
            res.send(sgt_monedas);
        }
    })
});

app.get('/Monedas/recuperar', function(req, res){
    Sgt_moneda.findById(req.query._id, function(error, sgt_monedas){
        if(error){
            res.send('Error.');
            console.log("Error en la recuperacion")
        }else{
            res.send(sgt_monedas);
            console.log(sgt_monedas)
        }
    });
});

app.post('/Monedas/guardar', function(req, res){
    if(req.query._id == null){
        //Inserta
        var sgt_moneda = new Sgt_moneda({
            monet_id: req.query.monet_id,
            mone_fecha: req.query.mone_fecha,
            mone_valor: req.query.mone_valor,
        });
        sgt_moneda.save(function(error, documento){
            if(error){
                res.send('Error.');
            }else{
                res.send(documento);
            }
        });
    }else{
        //Modifica
        Sgt_moneda.findById(req.query._id, function(error, documento){
            if(error){
                res.send('Error.');
            }else{
                var sgt_moneda_tipo = documento;
                    sgt_moneda.monet_id = req.query.monet_id,
                    sgt_moneda.mone_fecha= req.query.mone_fecha,
                    sgt_moneda.mone_valor= req.query.mone_valor,
                sgt_moneda.save(function(error, documento){
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

app.post('/Monedas/eliminar', function(req, res){
    Sgt_moneda.remove({_id: req.query._id}, function(error){
        if(error){
            res.send('Error.');
        }else{
            res.send('Ok');
        }
    });
});




app.listen(8080, function() {
    console.log('App listening on port 8080');
});
