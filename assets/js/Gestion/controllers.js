/**
 * Created by E.Saavedra on 08-02-2017.
 */
colorAdminApp.controller('30101_Controller', function($scope, $rootScope, $state) {
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
colorAdminApp.controller('30201_Controller', function($scope, $rootScope, $state) {
    $scope.PRO_CARGA_SOLI=function(){

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
colorAdminApp.controller('30204_Controller', function($scope, $rootScope, $state,$window) {
  //PRO_CREA_SOLIEX
    $scope.PRO_CREA_SOLIEX=function()
    {
            $window.location.href='#/app/gestion/solicitud/express';

    }
    $scope.PRO_CANC=function()
    {
        bootbox.confirm("Desea Salir y volver al menu principal?",function (result) {
            if(result){
                $window.location.href='#/app/dashboard';}
        });
    }
});
colorAdminApp.controller('30701_Controller', function($scope, $rootScope, $state,$window) {

    $scope.PRO_CANC=function()
    {
        bootbox.confirm("Desea Salir y volver al menu principal?",function (result) {
            if(result){
                $window.location.href='#/app/dashboard';}
        });
    }
});
colorAdminApp.controller('30702_Controller', function($scope, $rootScope, $state,$window) {
    $scope.PRO_AGR_SERV=function()
    {
        bootbox.confirm("La tarifa es : $6500 x Unidad ¿Desea Confirmar?",function (result) {
            if(result){
                bootbox.alert("Creación Exitosa");
                $window.location.href='#/app/gestion/servicio/despacho';
            }
            else {
                $window.location.href='#/app/gestion/servicio/despacho';
            }
        });
    }
    $scope.PRO_CANC=function()
    {
        bootbox.confirm("Desea Salir y volver al menu principal?",function (result) {
            if(result){
                $window.location.href='#/app/dashboard';}
        });
    }
});
colorAdminApp.controller('30801_Controller', function($scope, $rootScope, $state,$window) {
    $scope.PRO_EDIT_MANF=function()
    {
        bootbox.prompt({
            title: "Seleccione Nuevo Destino",
            inputType: 'select',
            inputOptions: [
                {
                    text: '4 - TI -Panamericana',
                    value: '',
                },
                {
                    text: '5 - TI- La Florida',
                    value: '1',
                },
                {
                    text: '14 -TI- Talca',
                    value: '2',
                },
                {
                    text: 'Choice Three',
                    value: '3',
                }
            ],
            callback: function (result) {
                console.log(result);
            }
        });
    }
	$scope.PRO_EDIT_VIAJE=function()
    {
        bootbox.prompt({
            title: "Seleccione Nuevo Viaje",
            callback: function (result) {
                console.log(result);
            }
        });
    }
    $scope.PRO_CANC=function()
    {
        bootbox.confirm("Desea Salir y volver al menu principal?",function (result) {
            $window.location.href='#/app/dashboard';
        });
    }
});
colorAdminApp.controller('30802_Controller', function($scope, $rootScope, $state,$window) {

    $scope.PRO_CANC=function()
    {
        bootbox.confirm("Desea Salir y volver al menu principal?",function (result) {
            if(result){
                $window.location.href='#/app/dashboard';}
        });
    }
});
