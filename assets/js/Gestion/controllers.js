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
