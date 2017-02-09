/**
 * Created by Core i3 on 09-02-2017.
 */
colorAdminApp.controller('20501_Controller', function($scope, $rootScope, $state) {
    $scope.PRO_ACEP_OBJ=function()
    {
        bootbox.prompt("Ingrese Nueva Tarifa",function (result) {
            console.log(result);
        });
    }
    $scope.PRO_RECH_OBJ=function()
    {
        bootbox.alert("Viaje sin cambios");
    }
});