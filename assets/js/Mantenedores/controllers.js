/* -------------------------------
    CONTROLLER - Proveedores
 ------------------------------- */
colorAdminApp.controller('ProveedoresController', function($scope, $rootScope, $state,$http) {

    $scope.cargarProveedor_Tipo = function(){

        $scope.sgt_proveedor_tipos = [ 
            { id : 0 , nombre : 'Seleccionar Tipo Proveedor'}, 
            { id : 1 , nombre : 'Proveedor'} ,
            { id : 2 , nombre : 'Servicio'} ,
            { id : 3 , nombre : 'Transportista'} 
        ] ;

        $scope.sgt_proveedor_estados = [ 
            { id : 0 , nombre : 'Seleccionar Estado'}, 
            { id : 1 , nombre : 'Habilitado'} ,
            { id : 2 , nombre : 'Suspendido'} ,
            { id : 3 , nombre : 'Vencido'} ,
            { id : 4 , nombre : 'Otro'} 



        ] ;

        $scope.sgt_comunas = [ 
            { id : 0 , nombre : 'Seleccionar Comuna'}, 
            { id : 13101 , nombre : 'Santiago'} ,
            { id : 15101 , nombre : 'Arica'} ,
            { id : 15102 , nombre : 'Camarones'} ,
            { id : 01101 , nombre : 'Iquique'} ,
            { id : 02101 , nombre : 'Antofagasta'} ,
            { id : 03101 , nombre : 'Copiapo'} ,
            { id : -1 , nombre : 'Otro'} 

        ] ;


    };
});
