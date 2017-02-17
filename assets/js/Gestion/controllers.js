/**
 * Created by E.Saavedra on 08-02-2017.
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

colorAdminApp.controller('30801_Controller', function($scope, $rootScope, $state) {
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

