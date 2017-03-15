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
colorAdminApp.controller('20502_Controller', function($scope, $rootScope, $state) {
    angular.element(document).ready(function () {
        /* Datepicker
         ------------------------- */

        $('#datetimepicker1').datepicker({
            minViewMode: 1,
            format : 'mm-yy',
            clearBtn: true,
            language: 'es'
        });
    });
    $scope.PRO_CARGA_SOLI=function()
    {
        bootbox.alert("Creación Exitosa  Solicitud N°12244");

    }
    $scope.PRO_CANC=function()
    {
        bootbox.confirm("Desea Salir y volver al menu principal?",function (result) {
            if(result){
                $window.location.href='#/app/dashboard';}
        });
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