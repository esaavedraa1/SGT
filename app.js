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


/*-------------------------------------------------------
1.0 Moneda Tipo Controller
---------------------------------------------------------*/
var Sgt_moneda_tipoSchema = mongoose.Schema({
    monet_id: Number,
    monet_nombre: String,
    monet_codigo: String,
    monet_pais: String

});
var Sgt_moneda_tipo = mongoose.model('Sgt_moneda_tipo', Sgt_moneda_tipoSchema);
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
/*-------------------------------------------------------
 2.0 Moneda  Controller
 ---------------------------------------------------------*/
var Sgt_monedaSchema = mongoose.Schema({
    monet_id: {type: Schema.ObjectId, ref:"Sgt_moneda_tipo"},
    mone_fecha: { type : Date, default: Date.now},
    mone_valor: String
});
var Sgt_moneda = mongoose.model('Sgt_moneda', Sgt_monedaSchema);
app.get('/Monedas', function(req, res){
    res.sendfile('./public/index2.html');
});
app.get('/Monedas/listar', function(req, res){
    Sgt_moneda.find({}, function(error, sgt_monedas){
        Sgt_moneda_tipo.populate(sgt_monedas,{path:"monet_id"},function (error,sgt_monedas) {
            if(error){
                res.send('Error en listar las Monedas');
            }else{
                res.send(sgt_monedas);
            }
        });
    });
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
        console.log("Error"+req.query.mone_fecha)
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
                var sgt_moneda = documento;
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
/*-------------------------------------------------------
 3.0 Proveedor Tipo Controller
 ---------------------------------------------------------*/
var Sgt_proveedor_tipoSchema = mongoose.Schema({
    provt_tipo: String

});
var Sgt_proveedor_tipo = mongoose.model('Sgt_proveedor_tipo', Sgt_proveedor_tipoSchema);
app.get('/Proveedores_Tipo', function(req, res){
    res.sendfile('./public/index3.html');
});
app.get('/Proveedores_Tipo/listar', function(req, res){
    Sgt_proveedor_tipo.find({}, function(error, sgt_proveedores_tipo){
        if(error){
            res.send('Error.');
        }else{
            res.send(sgt_proveedores_tipo);
        }
    })
});
app.get('/Proveedores_Tipo/recuperar', function(req, res){
    Sgt_proveedor_tipo.findById(req.query._id, function(error, sgt_proveedores_tipo){
        if(error){
            res.send('Error.');
            console.log("Error en la recuperacion")
        }else{
            res.send(sgt_proveedores_tipo);
            console.log(sgt_proveedores_tipo)
        }
    });
});
app.post('/Proveedores_Tipo/guardar', function(req, res){
    if(req.query._id == null){
        //Inserta
        var sgt_proveedor_tipo = new Sgt_proveedor_tipo({
            provt_tipo: req.query.provt_tipo
        });
        sgt_proveedor_tipo.save(function(error, documento){
            if(error){
                res.send('Error.');
            }else{
                res.send(documento);
            }
        });
    }else{
        //Modifica
        Sgt_proveedor_tipo.findById(req.query._id, function(error, documento){
            if(error){
                res.send('Error.');
            }else{
                var sgt_proveedor_tipo = documento;
                sgt_proveedor_tipo.provt_tipo = req.query.provt_tipo
                sgt_proveedor_tipo.save(function(error, documento){
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
app.post('/Proveedores_Tipo/eliminar', function(req, res){
    Sgt_proveedor_tipo.remove({_id: req.query._id}, function(error){
        if(error){
            res.send('Error.');
        }else{
            res.send('Ok');
        }
    });
});
/*-------------------------------------------------------
 4.0 Proveedor Controller
 ---------------------------------------------------------*/
var Sgt_proveedorSchema = mongoose.Schema({
    provt_id :{type:Schema.ObjectId,ref:"Sgt_proveedor_tipo"},
    prov_rut : String,
    prov_origen : String,
    prov_razon_social : String,
    prov_giro : String,
    prov_direccion : String,
    prov_numero : Number,
    prov_oficina : String,
    prov_ranking : Number,
    prov_telefono : String,
    prov_anexo : String,
    prov_email : String,
    prov_web : String,
    prov_credito : String,
    prov_credito_monto : String,
    prov_horario_inicio : String,
    prov_horario_termino : String,
    prov_formulario_30 : String
});
var Sgt_proveedor = mongoose.model('Sgt_proveedor', Sgt_proveedorSchema);
app.get('/Proveedores', function(req, res){
    res.sendfile('./public/index4.html');
});
app.get('/Proveedores/listar', function(req, res){
    Sgt_proveedor.find({}, function(error, sgt_proveedores){
        Sgt_proveedor.populate(sgt_proveedores,{path:'provt_id'},function(error,sgt_proveedores){
            if(error){
                res.send('Error.');
            }else{
                res.send(sgt_proveedores);
            }
        });
    });
});
app.get('/Proveedores/recuperar', function(req, res){
    Sgt_proveedor.findById(req.query._id, function(error, sgt_proveedores){
        if(error){
            res.send('Error.');
            console.log("Error en la recuperacion")
        }else{
            res.send(sgt_proveedores);
            console.log(sgt_proveedores)
        }
    });
});
app.post('/Proveedores/guardar', function(req, res){
    if(req.query._id == null){
        //Inserta
        var sgt_proveedor = new Sgt_proveedor({
            provt_id: req.query.provt_id,
            prov_rut : req.query.prov_rut,
            prov_origen : req.query.prov_origen ,
            prov_razon_social : req.query.prov_razon_social,
            prov_giro : req.query.prov_giro,
            prov_direccion : req.query.prov_direccion,
            prov_numero : req.query.prov_numero,
            prov_oficina : req.query.prov_oficina,
            prov_ranking : req.queryprov_ranking,
            prov_telefono : req.query.prov_telefono,
            prov_anexo : req.query.prov_anexo,
            prov_email : req.query.prov_email,
            prov_web : req.query.prov_web,
            prov_credito : req.query.prov_credito,
            prov_credito_monto : req.query.prov_credito_monto,
            prov_horario_inicio : req.query.prov_horario_inicio,
            prov_horario_termino : req.query.prov_horario_termino,
            prov_formulario_30 : req.query.prov_formulario_30
        });
        sgt_proveedor.save(function(error, documento){
            if(error){
                res.send('Error.');
            }else{
                res.send(documento);
            }
        });
    }else{
        //Modifica
        Sgt_proveedor.findById(req.query._id, function(error, documento){
            if(error){
                res.send('Error.');
            }else{
                var sgt_proveedor = documento;
                sgt_proveedor.provt_id = req.query.provt_id,
                    sgt_proveedor.prov_rut = req.query.prov_rut,
                    sgt_proveedor.prov_origen = req.query.prov_origen ,
                    sgt_proveedor.prov_razon_social = req.query.prov_razon_social,
                    sgt_proveedor.prov_giro = req.query.prov_giro,
                    sgt_proveedor.prov_direccion = req.query.prov_direccion,
                    sgt_proveedor.prov_numero = req.query.prov_numero,
                    sgt_proveedor.prov_oficina = req.query.prov_oficina,
                    sgt_proveedor.prov_ranking = req.queryprov_ranking,
                    sgt_proveedor.prov_telefono = req.query.prov_telefono,
                    sgt_proveedor.prov_anexo = req.query.prov_anexo,
                    sgt_proveedor.prov_email = req.query.prov_email,
                    sgt_proveedor.prov_web = req.query.prov_web,
                    sgt_proveedor.prov_credito = req.query.prov_credito,
                    sgt_proveedor.prov_credito_monto = req.query.prov_credito_monto,
                    sgt_proveedor.prov_horario_inicio = req.query.prov_horario_inicio,
                    sgt_proveedor.prov_horario_termino = req.query.prov_horario_termino,
                    sgt_proveedor.prov_formulario_30 = req.query.prov_formulario_30
                sgt_proveedor.save(function(error, documento){
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
app.post('/Proveedores/eliminar', function(req, res){
    Sgt_proveedor.remove({_id: req.query._id}, function(error){
        if(error){
            res.send('Error.');
        }else{
            res.send('Ok');
        }
    });
});
/*-------------------------------------------------------
 4.0 flota Controller
 ---------------------------------------------------------*/
var Sgt_flotaSchema = mongoose.Schema({
    prov_id :{type:Schema.ObjectId,ref:"Sgt_proveedor"},
    flot_patente : String,
    flot_marca : String,
    flot_modelo : String,
    flot_numero_vin : String,
    flot_numero_motor: String,
    flot_inscripcion : {type :date, default Date.now},
    flot_color : String,
    flot_peso_real : String,
    flot_peso_bruto : String,
    flot_peso_tara: String,
    flot_peso_neto : String,
    flot_combustible : String,
    flot_volumen : String,
    flot_ancho : String,
    flot_largo : String,
    flot_alto : String,
    flot_ruedas: Number,
    flot_ejes : Number,
    flot_sello : String,
    flot_rev_tecnica : date,
    flot_caja : String,
    flot_puertas : Number
});
var Sgt_flota = mongoose.model('Sgt_flota', Sgt_flotaSchema);
app.get('/Flota', function(req, res){
    res.sendfile('./public/index5.html');
});
app.get('/Flota/listar', function(req, res){
    Sgt_flota.find({}, function(error, sgt_flotas){
        Sgt_flota.populate(sgt_flotas,{path:'prov_id'},function(error,sgt_flotas){
            if(error){
                res.send('Error.');
            }else{
                res.send(sgt_flotas);
            }
        });
    });
});
app.get('/Flotas/recuperar', function(req, res){
    Sgt_flota.findById(req.query._id, function(error, sgt_flotas){
        if(error){
            res.send('Error.');
            console.log("Error en la recuperacion de las flotas")
        }else{
            res.send(sgt_flotas);
            console.log(sgt_flotas)
        }
    });
});
app.post('/Flotas/guardar', function(req, res){
    if(req.query._id == null){
        //Inserta
        var sgt_flota = new Sgt_flota({
            prov_id: req.query.prov_id,
            flot_patente : req.query.flot_patente,
            flot_marca : req.query.flot.flot_marca,
            flot_modelo : req.query.flot_modelo,
            flot_numero_vin : req.query.flot_numero_vin,
            flot_numero_motor: req.query.flot_numero_motor,
            flot_inscripcion : req.query.flot_inscripcion,
            flot_color : req.query.flot_color,
            flot_peso_real : req.query.flot_peso_real,
            flot_peso_bruto : req.query.flot_peso_bruto,
            flot_peso_tara: req.query.flot_peso_tara,
            flot_peso_neto : req.query.flot_peso_neto,
            flot_combustible : req.query.flot_combustible,
            flot_volumen : req.query.flot_volumen,
            flot_ancho : req.query.flot_ancho,
            flot_largo : req.query.flot_largo,
            flot_alto : req.query.flot_alto,
            flot_ruedas: req.query.flot_ruedas,
            flot_ejes : req.query.flot_ejes,
            flot_sello : req.query.flot_sello,
            flot_rev_tecnica : req.query.flot_rev_tecnica,
            flot_caja : req.query.flot_caja,
            flot_puertas : req.query.flot_puertas
        });
        sgt_flota.save(function(error, documento){
            if(error){
                res.send('Error.');
            }else{
                res.send(documento);
            }
        });
    }else{
        //Modifica
        Sgt_flota.findById(req.query._id, function(error, documento){
            if(error){
                res.send('Error.');
            }else{
                var sgt_flota = documento;
                sgt.flota.flot_patente = req.query.flot_patente,
                    sgt_flota.flot_marca = req.query.flot_marca,
                    sgt_flota.flot_modelo = req.query.flot_modelo,
                    sgt_flota.flot_numero_vin = req.query.flot_numero_vin,
                    sgt_flota.flot_numero_motor= req.query.flot_numero_motor,
                    sgt_flota.flot_inscripcion = req.query.flot_inscripcion,
                    sgt_flota.flot_color = req.query.flot_color,
                    sgt_flota.flot_peso_real = req.query.flot_peso_real,
                    sgt_flota.flot_peso_bruto = req.query.flot_peso_bruto,
                    sgt_flota.flot_peso_tara = req.query.flot_peso_tara,
                    sgt_flota.flot_peso_neto = req.query.flot_peso_neto,
                    sgt_flota.flot_combustible = req.query.flot_combustible,
                    sgt_flota.flot_volumen = req.query.flot_volumen,
                    sgt_flota.flot_ancho = req.query.flot_ancho,
                    sgt_flota.flot_largo = req.query.flot_largo,
                    sgt_flota.flot_alto = req.query.flot_alto,
                    sgt_flota.flot_ruedas = req.query.flot_ruedas,
                    sgt_flota.flot_ejes = req.query.flot_ejes,
                    sgt_flota.flot_sello = req.query.flot_sello,
                    sgt_flota.flot_rev_tecnica = req.query.flot_rev_tecnica,
                    sgt_flota.flot_caja = req.query.flot_caja,
                    sgt_flota.flot_puertas = req.query.flot_puertas
                sgt_flota.save(function(error, documento){
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
app.post('/Flotas/eliminar', function(req, res){
    Sgt_flota.remove({_id: req.query._id}, function(error){
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
