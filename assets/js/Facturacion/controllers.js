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
colorAdminApp.controller('B2B_Fact_Obje_Resp_Controller', function($scope, $rootScope, $state) {
	$scope.PRO_RECHA_OF_OBJ=function()
    {
        bootbox.prompt("Ingrese un Comentario para el Rechazo",function (result) {
            console.log(result);
        });
    }
});