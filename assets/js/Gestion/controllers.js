/**
 * Created by Core i3 on 08-02-2017.
 */
colorAdminApp.controller('30201_Controller', function($scope, $rootScope, $state) {
    $scope.PRO_ACEP_OBJ=function()
    {
        bootbox.prompt("Ingrese Nueva Tarifa",function (result) {
            console.log(result);
        });
    }
    $scope.PRO_RECH_OBJ=function()
    {
        bootbox.alert("Viaje vuelve a Estado CERRADO");
    }
});

colorAdminApp.controller('40501_Controller', function($scope, $rootScope, $state) {
    $scope.PRO_AGR_TARF_TRON=function() {
        bootbox.alert("Tarifa Creada Exitosamente : Numero  = 123");
    }
    $scope.PRO_CANC=function()
    {
        bootbox.alert("Desea Cancelar y perder los datos?");
    }
});
colorAdminApp.controller('40502_Controller', function($scope, $rootScope, $state) {
    $scope.PRO_AGR_TARF_TRON=function() {
        bootbox.alert("Tarifa Creada Exitosamente : Numero  = 123");
    }
    $scope.PRO_CANC=function()
    {
        bootbox.alert("Desea Cancelar y perder los datos?");
    }
});