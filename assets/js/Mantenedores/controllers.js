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
colorAdminApp.controller('40501_Controller', function($scope, $rootScope, $state,$window) {
    $scope.PRO_AGR_TARF_TRON=function() {
        bootbox.alert("Ruta Tarifal Creada Exitosamente : Numero  = 123");
        $window.location.href='#/app/mantenedores/tarifa/troncal/tarificar';
    }
    $scope.PRO_CANC=function()
    {
        bootbox.alert("Desea Cancelar y perder los datos?");
    }
});
colorAdminApp.controller('40502_Controller', function($scope, $rootScope, $state,$window) {
    $scope.PRO_AGR_TARF_TRON=function() {
        bootbox.alert("Tarifación Creada Exitosamente : Numero  = 1123");
        $window.location.href='#/app/dashboard';
    }
    $scope.PRO_CANC=function()
    {
        bootbox.alert("Desea Cancelar y perder los datos?");
    }
});
colorAdminApp.controller('40503_Controller', function($scope, $rootScope, $state,$window) {

    $scope.PRO_CANC=function()
    {
        bootbox.alert("Desea Cancelar y Volver al Menu Principal");
        $window.location.href='#/app/dashboard';
    }
});