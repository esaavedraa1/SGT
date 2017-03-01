/*
 Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.6
 Version: 2.0.0
 Author: Sean Ngu
 Website: http://www.seantheme.com/color-admin-v2.0/admin/angularjs/
 */

var colorAdminApp = angular.module('colorAdminApp', [
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad'
]);

colorAdminApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/dashboard');

    $stateProvider
    //00000 : MENU PRINCIPAL
        .state('app', {
            url: '/app',
            templateUrl: 'template/app.html',
            abstract: true
        })
        //00001 : MENU DASHBOARD PRINCIPAL
        .state('app.dashboard', {
            url: '/dashboard',
            templateUrl: 'views/index.html',
            data: { pageTitle: 'Dashboard' },
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/jquery-jvectormap/jquery-jvectormap-1.2.2.css',
                            'assets/plugins/bootstrap-datepicker_old/css/datepicker.css',
                            'assets/plugins/bootstrap-datepicker_old/css/datepicker3.css',
                            'assets/plugins/gritter/css/jquery.gritter.css',
                            'assets/plugins/gritter/js/jquery.gritter.js',
                            'assets/plugins/flot/jquery.flot.min.js',
                            'assets/plugins/flot/jquery.flot.time.min.js',
                            'assets/plugins/flot/jquery.flot.resize.min.js',
                            'assets/plugins/flot/jquery.flot.pie.min.js',
                            'assets/plugins/sparkline/jquery.sparkline.js',
                            'assets/plugins/jquery-jvectormap/jquery-jvectormap-1.2.2.min.js',
                            'assets/plugins/jquery-jvectormap/jquery-jvectormap-world-mill-en.js',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/nvd3/build/nv.d3.css',
                            'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.2/d3.min.js',
                            'assets/plugins/nvd3/build/nv.d3.js'
                        ]
                    });
                }]
            }
        })
        //FIN 00000
        /*------------------------------------------------------------------------------------------------------------*/
        //10000 : MENU CONSULTA
        .state('app.consulta', {
            url: '/consulta',
            template: '<div ui-view></div>',
            abstract: true
        })
        //10101: CONSULTA DE DESPACHOS PARCIALES
        .state('app.consulta.parciales', {
            url: '/parciales',
            data: { pageTitle: 'Consulta- Despachos Parciales ' },
            templateUrl: 'views/Consulta/parciales.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //10102: DASHBOARD LOGISTICA
        .state('app.consulta.dashboard', {
            url: '/dashboard',
            data: { pageTitle: 'Dashboard Transportes ' },
            templateUrl: 'views/Consulta/dashboard.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //10200: MENU  VIAJES
        .state('app.consulta.viaje', {
            url: '/viaje',
            template: '<div ui-view></div>',
            abstract: true
        })
        //10201: CONSULTA VIAJE TRONCAL
        .state('app.consulta.viaje.troncal', {
            url: '/troncal',
            data: { pageTitle: 'Viajes- Despachos TRN' },
            templateUrl: 'views/Consulta/Viajes/troncal.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //10202: CONSULTA VIAJE ULTIMA MILLA DESPACHO DIRECTO CLIENTE
        .state('app.consulta.viaje.umilla', {
            url: '/um',
            data: { pageTitle: 'Viajes- Despachos UM/DDC ' },
            templateUrl: 'views/Consulta/Viajes/umilla.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //10300: Menu SUPERVISOR
        .state('app.consulta.supervisor', {
            url: '/supervisor',
            template: '<div ui-view></div>',
            abstract: true
        })
        //10301: CONSULTA SUPERVISOR ANULAR VIAJE
        .state('app.consulta.supervisor.anular', {
            url: '/anular',
            data: { pageTitle: 'Supervisor- Anular Viaje' },
            templateUrl: 'views/Consulta/Supervisor/anular.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //10302: VIAJES TRONCAL
        .state('app.consulta.supervisor.troncal', {
            url: '/troncal',
            data: { pageTitle: 'Supervisor-Viaje Troncal' },
            templateUrl: 'views/Consulta/Supervisor/troncal.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //10303: VIAJES ULTIMA MILLA / DDC
        .state('app.consulta.supervisor.umilla', {
            url: '/umilla',
            data: { pageTitle: 'Supervisor-Viaje Ulm, Milla /DDC' },
            templateUrl: 'views/Consulta/Supervisor/umilla.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //10400: Menu TARIFAS
        .state('app.consulta.tarifa', {
            url: '/tarifa',
            template: '<div ui-view></div>',
            abstract: true
        })
        //10401: TARIFA TRONCAL
        .state('app.consulta.tarifa.troncal', {
            url: '/troncal',
            data: { pageTitle: 'Tarifa-Viaje Troncal' },
            templateUrl: 'views/Consulta/Tarifa/troncal.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //10402: TARIFA ULTIMA MILLA DDC
        .state('app.consulta.tarifa.umilla', {
            url: '/umilla',
            data: { pageTitle: 'Tarifa-Viaje Ulm, Milla /DDC' },
            templateUrl: 'views/Consulta/Tarifa/umilla.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //10403: TARIFA FACTURACION ULTIMA MILLA DDC
        .state('app.consulta.tarifa.factura', {
            url: '/factura',
            data: { pageTitle: 'Tarifa-Facturación UM/DDC' },
            templateUrl: 'views/Consulta/Tarifa/factura.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //10500: Menu REPORTERIA
        .state('app.consulta.reporteria', {
            url: '/reporteria',
            template: '<div ui-view></div>',
            abstract: true
        })
        //10501: MERCADERIA TRANPORTADA
        .state('app.consulta.reporteria.mercaderia', {
            url: '/mercaderia',
            data: { pageTitle: 'Reportería Mercaderia Trans.' },
            templateUrl: 'views/Consulta/Reporteria/mercaderia.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //10502: DISTRIBUCION DE GASTOS
        .state('app.consulta.reporteria.gastos', {
            url: '/gastos',
            data: { pageTitle: 'Reportería Distribución de Gastos' },
            templateUrl: 'views/Consulta/Reporteria/gastos.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //10503: VIAJES DE REPARTO TARIFICADO
        .state('app.consulta.reporteria.reparto', {
            url: '/reparto',
            data: { pageTitle: 'Reportería Viajes de Reparto Tarificado' },
            templateUrl: 'views/Consulta/Reporteria/reparto.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //10504: PRORRATEO
        .state('app.consulta.reporteria.prorrateo', {
            url: '/prorrateo',
            data: { pageTitle: 'Reportería Prorrateo.' },
            templateUrl: 'views/Consulta/Reporteria/prorrateo.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //FIN 10000
        /*------------------------------------------------------------------------------------------------------------*/
        //20000 : MENU FACTURACION
        .state('app.facturacion', {
            url: '/facturacion',
            template: '<div ui-view></div>',
            abstract: true
        })
        //20100 : MENU APROBACION ORDEN DE FACTURACION
        .state('app.facturacion.aprobacion', {
            url: '/aprobacion',
            template: '<div ui-view></div>',
            abstract: true
        })
        //20101 : APRUEBA RECHAZA ORDEN DE FACTURACION
        .state('app.facturacion.aprobacion.aprueba', {
            url: '/aprueba',
            data: { pageTitle: 'Facturación - Aprobacion OF ' },
            templateUrl: 'views/Facturacion/Aprobacion/aprueba.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //20102 : DETALLE VIAJES TRONCALES
        .state('app.facturacion.aprobacion.troncal', {
            url: '/troncal',
            data: { pageTitle: 'Facturación - Detalle Troncal ' },
            templateUrl: 'views/Facturacion/Aprobacion/troncal.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //20102 : DETALLE VIAJES ULTIMA MILLA DDC
        .state('app.facturacion.aprobacion.umilla', {
            url: '/umilla',
            data: { pageTitle: 'Facturación - Detalle Ultima M/DDC ' },
            templateUrl: 'views/Facturacion/Aprobacion/umilla.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //20200 : MENU APROBACION ORDEN DE FACTURACION
        .state('app.facturacion.validacion', {
            url: '/validacion',
            template: '<div ui-view></div>',
            abstract: true
        })
        //20201 : APRUEBA RECHAZA ORDEN DE FACTURACION
        .state('app.facturacion.validacion.aprueba', {
            url: '/aprueba',
            data: { pageTitle: 'Facturación - Validación OF ' },
            templateUrl: 'views/Facturacion/Validacion/aprueba.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //20202 : DETALLE VIAJES TRONCALES
        .state('app.facturacion.validacion.troncal', {
            url: '/troncal',
            data: { pageTitle: 'Facturación - Detalle Troncal ' },
            templateUrl: 'views/Facturacion/Validacion/troncal.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //20202 : DETALLE VIAJES ULTIMA MILLA DDC
        .state('app.facturacion.validacion.umilla', {
            url: '/umilla',
            data: { pageTitle: 'Facturación - Detalle Ultima M/DDC ' },
            templateUrl: 'views/Facturacion/Validacion/umilla.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //20300 : MENU OBJECIONES
        .state('app.facturacion.objeciones', {
            url: '/objeciones',
            template: '<div ui-view></div>',
            abstract: true
        })
        //20301: PANTALLA DE RESPUESTA DE OBJECIONES F-15
        .state('app.facturacion.objeciones.responder', {
            url: '/responder',
            data: { pageTitle: 'Facturación - Responder Objecion B2B ' },
            templateUrl: 'views/Facturacion/Objeciones/responder.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //20400 : MENU CONSULTA FACTURACION
        .state('app.facturacion.consulta', {
            url: '/consulta',
            template: '<div ui-view></div>',
            abstract: true
        })
        //20401: PANTALLA consulta facturacion troncal F-17
        .state('app.facturacion.consulta.troncal', {
            url: '/troncal',
            data: { pageTitle: 'Consulta Facturacion Troncal ' },
            templateUrl: 'views/Facturacion/Consulta/troncal.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //20402: PANTALLA consulta facturacion umilla
        .state('app.facturacion.consulta.umilla', {
            url: '/umilla',
            data: { pageTitle: 'Consulta Facturacion Ult. Milla DDC ' },
            templateUrl: 'views/Facturacion/Consulta/umilla.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //20500 : MENU MODIFICAR VALOR VIAJE
        .state('app.facturacion.modifica', {
            url: '/modifica',
            template: '<div ui-view></div>',
            abstract: true
        })
        //20501: PANTALLA MODIFICA VALOR VIAJE F-16
        .state('app.facturacion.modifica.viaje', {
            url: '/viaje',
            data: { pageTitle: 'Modifica Valor Viaje ' },
            templateUrl: 'views/Facturacion/Modifica/viaje.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //20502: PANTALLA consulta facturacion troncal
        .state('app.facturacion.modifica.ns', {
            url: '/ns',
            data: { pageTitle: 'Modifica Valor NS ' },
            templateUrl: 'views/Facturacion/Modifica/ns.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //20503: PANTALLA consulta facturacion troncal
        .state('app.facturacion.modifica.boleta', {
            url: '/boleta',
            data: { pageTitle: 'Modifica Valor Viaje Boleta ' },
            templateUrl: 'views/Facturacion/Modifica/boleta.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //20600 : MENU SOLICITUD INTERNAS
        .state('app.facturacion.interna', {
            url: '/interna',
            template: '<div ui-view></div>',
            abstract: true
        })
        //20501: PANTALLA CREAR SOLICITUD INTERNA
        .state('app.facturacion.interna.crear', {
            url: '/crear',
            data: { pageTitle: 'Solicitud Interna - Crear ' },
            templateUrl: 'views/Facturacion/Interna/crear.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //FIN 20000
        /*------------------------------------------------------------------------------------------------------------*/
        //30000 : MENU GESTION
        .state('app.gestion', {
            url: '/gestion',
            template: '<div ui-view></div>',
            abstract: true
        })
        //30100 : MENU PLANIFICACION
        .state('app.gestion.planificacion', {
            url: '/planificacion',
            template: '<div ui-view></div>',
            abstract: true
        })
        //30101: PANTALLA PLANIFICACION HISTORICA F-24
        .state('app.gestion.planificacion.historica', {
            url: '/historica',
            data: { pageTitle: 'Planificacion Historica' },
            templateUrl: 'views/Gestion/Planificacion/historica.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'

                        ]
                    });
                }]
            }
        })
        //30102: PANTALLA PLANIFICACION PREDICTIVA
        .state('app.gestion.planificacion.predictiva', {
            url: '/predictiva',
            data: { pageTitle: 'Planificacion Predictiva : Carga Diaria' },
            templateUrl: 'views/Gestion/Planificacion/predictiva.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //30200 : MENU SOLICITUDES
        .state('app.gestion.solicitud', {
            url: '/solicitud',
            template: '<div ui-view></div>',
            abstract: true
        })
        //30201: PANTALLA CREAR SOLICITUD PROGRAMADA F-03
        .state('app.gestion.solicitud.programada', {
            url: '/programada',
            data: { pageTitle: 'Solicitud Interna - Crear ' },
            templateUrl: 'views/Gestion/Solicitud/programada.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //30202: PANTALLA CREAR SOLICITUD EXPRESS F-02
        .state('app.gestion.solicitud.express', {
            url: '/express',
            data: { pageTitle: 'Solicitud express - Crear ' },
            templateUrl: 'views/Gestion/Solicitud/express.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //30203: PANTALLA PUBLICAR SOLICITUD F-05
        .state('app.gestion.solicitud.publicar', {
            url: '/publicar',
            data: { pageTitle: 'Solicitud Publicar ' },
            templateUrl: 'views/Gestion/Solicitud/publicar.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //30203: PANTALLA PUBLICAR SOLICITUD F-05
        .state('app.gestion.solicitud.enpatio', {
            url: '/enpatio',
            data: { pageTitle: 'Solicitud Express ' },
            templateUrl: 'views/Gestion/Solicitud/enpatio.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //30300 : Menu CONTROL
        .state('app.gestion.control', {
            url: '/control',
            template: '<div ui-view></div>',
            abstract: true
        })
        //30301: PANTALLA CONTROL DE INGRESO F-04
        .state('app.gestion.control.ingreso', {
            url: '/salida',
            data: { pageTitle: 'Control de Ingreso' },
            templateUrl: 'views/Gestion/Control/ingreso.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //30302 : CONTROL DE SALIDA F-08
        .state('app.gestion.control.salida', {
            url: '/salida',
            data: { pageTitle: 'Control de Salida' },
            templateUrl: 'views/Gestion/Control/salida.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //30400 : Menu Sellos
        .state('app.gestion.sello', {
            url: '/sello',
            template: '<div ui-view></div>',
            abstract: true
        })
        //30401 : INGRESO DE SELLOS
        .state('app.gestion.sello.ingreso', {
            url: '/ingreso',
            data: { pageTitle: 'Ingreso de Sellos' },
            templateUrl: 'views/Gestion/Sello/ingreso.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //30500 : MENU VALIDACIONES
        .state('app.gestion.validaciones', {
            url: '/validaciones',
            template: '<div ui-view></div>',
            abstract: true
        })
        //30501: VALIDACIONES DE SALIDA F-07
        .state('app.gestion.validaciones.salida', {
            url: '/salida',
            data: { pageTitle: 'Validaciones de Salida' },
            templateUrl: 'views/Gestion/Validaciones/salida.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //30501: VALIDACIONES DE SALIDA F-07
        .state('app.gestion.validaciones.itinerario', {
            url: '/itinerario',
            data: { pageTitle: 'Itininerario de Salida' },
            templateUrl: 'views/Gestion/Validaciones/itinerario.html'
        })
        //30600: MENU MANIFIESTOS
        .state('app.gestion.manifiestos', {
            url: '/manifiestos',
            template: '<div ui-view></div>',
            abstract: true
        })
        //30601: PANTALLA CERRAR VIAJE
        .state('app.gestion.manifiestos.cerrar', {
            url: '/cerrar',
            data: { pageTitle: 'Cerrar Manifiesto' },
            templateUrl: 'views/Gestion/Manifiesto/cerrar.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //30700 : MENÚ SERVICIOS
        .state('app.gestion.servicio', {
            url: '/servicio',
            template: '<div ui-view></div>',
            abstract: true
        })
        //30701 : PANTALLA CREACION DE SERVICIOS
        .state('app.gestion.servicio.despacho', {
            url: '/despacho',
            data: { pageTitle: 'Crear Servicio' },
            templateUrl: 'views/Gestion/Servicio/despacho.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.gestion.servicio.crear', {
            url: '/crear',
            data: { pageTitle: 'Crear Servicio' },
            templateUrl: 'views/Gestion/Servicio/crear.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //30800: MENU VIAJES
        .state('app.gestion.viaje', {
            url: '/viaje',
            template: '<div ui-view></div>',
            abstract: true
        })
        //30801: PANTALLA EDITAR VIAJE
        .state('app.gestion.viaje.editar', {
            url: '/editar',
            data: { pageTitle: 'Editar Viaje' },
            templateUrl: 'views/Gestion/Viaje/editar.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //30802: PANTALLA ANULAR VIAJE
        .state('app.gestion.viaje.anular', {
            url: '/anular',
            data: { pageTitle: 'Anular Viaje' },
            templateUrl: 'views/Gestion/Viaje/anular.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        //FIN 30000
        /*------------------------------------------------------------------------------------------------------------*/
        //40000 MENU MANTENEDORES
        .state('app.mantenedores', {
            url: '/mantenedores',
            template: '<div ui-view></div>',
            abstract: true
        })

        .state('app.mantenedores.proveedores', {
            url: '/proveedores',
            template: '<div ui-view></div>',
            abstract: true
        })

        .state('app.mantenedores.proveedores.listado', {
            url: '/listado',
            data: { pageTitle: 'Mantenedor Proveedores - Listado ' },
            templateUrl: 'views/Mantenedores/Proveedores/listado.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js'
                        ]
                    });
                }]
            }
        })

        .state('app.mantenedores.proveedores.agregar', {
            url: '/agregar',
            data: { pageTitle: 'Mantenedor de Proveedores - Agregar' },
            templateUrl: 'views/Mantenedores/Proveedores/agregar.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js'
                        ]
                    });
                }]
            }
        })

        .state('app.mantenedores.proveedores.detalle', {
            url: '/detalle',
            data: { pageTitle: 'Mantenedor de Proveedores - Ver Detalle' },
            templateUrl: 'views/Mantenedores/Proveedores/detalle.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js'
                        ]
                    });
                }]
            }
        })

        .state('app.mantenedores.proveedores.editar', {
            url: '/editar',
            data: { pageTitle: 'Mantenedor de Proveedores - Editar' },
            templateUrl: 'views/Mantenedores/Proveedores/editar.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js'
                        ]
                    });
                }]
            }
        })

        .state('app.mantenedores.proveedores.eliminar', {
            url: '/eliminar',
            data: { pageTitle: 'Mantenedor de Proveedores - Eliminar' },
            templateUrl: 'views/Mantenedores/Proveedores/agregar.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js'
                        ]
                    });
                }]
            }
        })

        //40500 : MENU TARIFAS
        .state('app.mantenedores.tarifa', {
            url: '/tarifa',
            template: '<div ui-view></div>',
            abstract: true
        })
        //40500 :MENU TARIFAS TRONCALES
        .state('app.mantenedores.tarifa.troncal', {
            url: '/troncal',
            template: '<div ui-view></div>',
            abstract: true
        })
        //40501: Pantalla agregar tarifa troncal
        .state('app.mantenedores.tarifa.troncal.agregar', {
            url: '/agregar',
            data: { pageTitle: 'Mantenedor de Tarifas Troncales - Agregar' },
            templateUrl: 'views/Mantenedores/Tarifa/Troncal/agregar.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js'
                        ]
                    });
                }]
            }
        })
        //40502 : tarificar ruta - sin menu directo veiene de 40501
        .state('app.mantenedores.tarifa.troncal.tarificar', {
            url: '/tarificar',
            data: { pageTitle: 'Mantenedor de Tarifas Troncales - Tarificar' },
            templateUrl: 'views/Mantenedores/Tarifa/Troncal/tarificar.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js'
                        ]
                    });
                }]
            }
        })
        //40503:Pantalla Historial de Tarifas
        .state('app.mantenedores.tarifa.troncal.historial', {
            url: '/historial',
            data: { pageTitle: 'Tarifas Troncales - Historial' },
            templateUrl: 'views/Mantenedores/Tarifa/Troncal/historial.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js'
                        ]
                    });
                }]
            }
        })

        //FIN 40000
        /*------------------------------------------------------------------------------------------------------------*/
        //90000 : MENU B2B
        .state('app.b2b', {
            url: '/b2b',
            template: '<div ui-view></div>',
            abstract: true
        })
        //90000 : MENU TRANSPORTISTA
        .state('app.b2b.transportista', {
            url: '/transportista',
            template: '<div ui-view></div>',
            abstract: true
        })
        //90600
        .state('app.b2b.transportista.solicitud', {
            url: '/solicitud',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.b2b.transportista.solicitud.aceptar', {
            url: '/aceptar',
            data: { pageTitle: 'Aceptar Publicaciones' },
            templateUrl: 'views/B2B/Transportista/Solicitud/aceptar.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap_colorpicker_new/css/bootstrap-colorpicker.min.css ',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/password-indicator/css/password-indicator.css',
                            'assets/plugins/bootstrap-combobox/css/bootstrap-combobox.css',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.css',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css',
                            'assets/plugins/jquery-tag-it/css/jquery.tagit.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-colorpalette/css/bootstrap-colorpalette.css',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker.css',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker-fontawesome.css',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker-glyphicons.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap_colorpicker_new/js/bootstrap-colorpicker.min.js',
                            'assets/plugins/masked-input/masked-input.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/password-indicator/js/password-indicator.js',
                            'assets/plugins/bootstrap-combobox/js/bootstrap-combobox.js',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
                            'assets/plugins/bootstrap-show-password/bootstrap-show-password.js',
                            'assets/plugins/bootstrap-colorpalette/js/bootstrap-colorpalette.js',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker.js'
                        ]
                    });
                }]
            }
        })
        //90602 : Patnatall solicitud detalle
        .state('app.b2b.transportista.solicitud.detalle', {
            url: '/detalle',
            data: { pageTitle: 'Aceptar Publicaciones' },
            templateUrl: 'views/B2B/Transportista/Solicitud/detalle.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap_colorpicker_new/css/bootstrap-colorpicker.min.css ',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/password-indicator/css/password-indicator.css',
                            'assets/plugins/bootstrap-combobox/css/bootstrap-combobox.css',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.css',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css',
                            'assets/plugins/jquery-tag-it/css/jquery.tagit.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-colorpalette/css/bootstrap-colorpalette.css',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker.css',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker-fontawesome.css',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker-glyphicons.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap_colorpicker_new/js/bootstrap-colorpicker.min.js',
                            'assets/plugins/masked-input/masked-input.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/password-indicator/js/password-indicator.js',
                            'assets/plugins/bootstrap-combobox/js/bootstrap-combobox.js',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
                            'assets/plugins/bootstrap-show-password/bootstrap-show-password.js',
                            'assets/plugins/bootstrap-colorpalette/js/bootstrap-colorpalette.js',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker.js'
                        ]
                    });
                }]
            }
        })
        .state('app.b2b.transportista.despacho', {
            url: '/despacho',
            data: { pageTitle: 'Despachos Realizados' },
            templateUrl: 'views/B2B/Transportista/b2b_despacho.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap_colorpicker_new/css/bootstrap-colorpicker.min.css ',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/password-indicator/css/password-indicator.css',
                            'assets/plugins/bootstrap-combobox/css/bootstrap-combobox.css',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.css',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css',
                            'assets/plugins/jquery-tag-it/css/jquery.tagit.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-colorpalette/css/bootstrap-colorpalette.css',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker.css',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker-fontawesome.css',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker-glyphicons.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap_colorpicker_new/js/bootstrap-colorpicker.min.js',
                            'assets/plugins/masked-input/masked-input.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/password-indicator/js/password-indicator.js',
                            'assets/plugins/bootstrap-combobox/js/bootstrap-combobox.js',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
                            'assets/plugins/bootstrap-show-password/bootstrap-show-password.js',
                            'assets/plugins/bootstrap-colorpalette/js/bootstrap-colorpalette.js',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker.js'
                        ]
                    });
                }]
            }
        })
        .state('app.b2b.transportista.oc', {
            url: '/oc',
            data: { pageTitle: 'Ordenes de Compra' },
            templateUrl: 'views/B2B/Transportista/b2b_oc.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap_colorpicker_new/css/bootstrap-colorpicker.min.css ',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/password-indicator/css/password-indicator.css',
                            'assets/plugins/bootstrap-combobox/css/bootstrap-combobox.css',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.css',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css',
                            'assets/plugins/jquery-tag-it/css/jquery.tagit.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-colorpalette/css/bootstrap-colorpalette.css',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker.css',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker-fontawesome.css',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker-glyphicons.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap_colorpicker_new/js/bootstrap-colorpicker.min.js',
                            'assets/plugins/masked-input/masked-input.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/password-indicator/js/password-indicator.js',
                            'assets/plugins/bootstrap-combobox/js/bootstrap-combobox.js',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
                            'assets/plugins/bootstrap-show-password/bootstrap-show-password.js',
                            'assets/plugins/bootstrap-colorpalette/js/bootstrap-colorpalette.js',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker.js'
                        ]
                    });
                }]
            }
        })
        .state('app.b2b.transportista.factura', {
            url: '/factura',
            data: { pageTitle: 'Facturas Emitidas' },
            templateUrl: 'views/B2B/Transportista/b2b_factura.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap_colorpicker_new/css/bootstrap-colorpicker.min.css ',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/password-indicator/css/password-indicator.css',
                            'assets/plugins/bootstrap-combobox/css/bootstrap-combobox.css',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.css',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css',
                            'assets/plugins/jquery-tag-it/css/jquery.tagit.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-colorpalette/css/bootstrap-colorpalette.css',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker.css',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker-fontawesome.css',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker-glyphicons.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap_colorpicker_new/js/bootstrap-colorpicker.min.js',
                            'assets/plugins/masked-input/masked-input.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/password-indicator/js/password-indicator.js',
                            'assets/plugins/bootstrap-combobox/js/bootstrap-combobox.js',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
                            'assets/plugins/bootstrap-show-password/bootstrap-show-password.js',
                            'assets/plugins/bootstrap-colorpalette/js/bootstrap-colorpalette.js',
                            'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker.js'
                        ]
                    });
                }]
            }
        })
    //FIN 90000
}]);

colorAdminApp.run(['$rootScope', '$state', 'setting', function($rootScope, $state, setting) {
    $rootScope.$state = $state;
    $rootScope.setting = setting;
}]);