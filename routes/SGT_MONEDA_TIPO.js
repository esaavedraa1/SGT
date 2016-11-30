/**
 * Created by Core i3 on 30-11-2016.
 */
var SGT_MONEDA_TIPO;
exports.setModel = function(modelo){
    SGT_MONEDA_TIPO = modelo;
};
exports.index = function(req, res){
    SGT_MONEDA_TIPO.find({},function (error, SGT_MONEDAS_TIPO) {
        if(error){
            res.send('Error capturando monedas tipo');
        }else{
            res.json('SGT_MONEDAS_TIPO');
        }
    })
};
exports.create = function(req, res){
    //
};
exports.store = function(req, res){
    //
};
exports.show = function(req, res){
    //
};
exports.edit = function(req, res){
    //
};
exports.update = function(req, res){
    //
};
exports.destroy = function(req, res){
    //
};