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
        .state('app', {
            url: '/app',
            templateUrl: 'template/app.html',
            abstract: true
        })
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

        .state('app.personal', {
            url: '/personal',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.personal.todos', {
        url: '/todos',
        data: { pageTitle: 'Tabla Personal' },
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            },
        templateUrl: 'views/personal_todos.html'
    })
        .state('app.personal.crear', {
            url: '/crear',
            data: { pageTitle: 'Crear Personal' },
            templateUrl: 'views/personal_crear.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
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
        .state('app.personal.editar', {
            url: '/editar',
            data: { pageTitle: 'Editar Personal' },
            templateUrl: 'views/personal_editar.html'
        })
        .state('app.personal.buscar', {
            url: '/buscar',
            data: { pageTitle: 'Buscar Personal' },
            templateUrl: 'views/personal_buscar.html'
        })
        .state('app.personal.eliminar', {
            url: '/eliminar',
            data: { pageTitle: 'Eliminar Personal' },
            templateUrl: 'views/personal_eliminar.html'
        })
        .state('app.carga', {
            url: '/carga',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.carga.todos', {
            url: '/todos',
            data: { pageTitle: 'Tabla Manifiestos de Craga' },
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
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
            },
            templateUrl: 'views/carga_todos.html'
        })
        //Despachos
        .state('app.despacho', {
            url: '/despacho',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.despacho.buscar', {
            url: '/buscar',
            data: { pageTitle: 'Despacho Buscar' },
            templateUrl: 'views/despacho_buscar.html'
        })
        .state('app.despacho.todos', {
            url: '/todos',
            data: { pageTitle: 'Despachos Registrados' },
            templateUrl: 'views/despacho_todos.html',
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
        .state('app.despacho.validar', {
            url: '/validar',
            data: { pageTitle: 'Validaciones de Salida' },
            templateUrl: 'views/despacho_validar.html',
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
        .state('app.despacho.crear', {
            url: '/crear',
            data: { pageTitle: 'Despacho Crear' },
            templateUrl: 'views/despacho_crear.html',
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
        .state('app.despacho.editar', {
            url: '/editar',
            data: { pageTitle: 'Despacho Editar' },
            templateUrl: 'views/despacho_editar.html',
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
        .state('app.despacho.anular', {
            url: '/anular',
            data: { pageTitle: 'Despacho Anular' },
            templateUrl: 'views/despacho_anular.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
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
        //Despacho Tipo

        .state('app.despacho.tipo', {
            url: '/tipo',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.despacho.tipo.todos', {
            url: '/todos',
            data: { pageTitle: 'Despacho Tipo Todos' },
            templateUrl: 'views/despacho_tipo_todos.html'
        })
        .state('app.despacho.tipo.crear', {
            url: '/crear',
            data: { pageTitle: 'Despacho Tipo Crear' },
            templateUrl: 'views/despacho_tipo_crear.html',
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
        .state('app.despacho.tipo.editar', {
            url: '/editar',
            data: { pageTitle: 'Despacho Tipo Editar' },
            templateUrl: 'views/despacho_tipo_editar.html',
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

        .state('app.solicitud', {
            url: '/solicitud',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.solicitud.programada', {
            url: '/programada',
            data: { pageTitle: 'Solicitud Programada' },
            templateUrl: 'views/solicitud_programada.html',
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
        .state('app.solicitud.publicar', {
            url: '/publicar',
            data: { pageTitle: 'Solicitud Publicar' },
            templateUrl: 'views/solicitud_publicar.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
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
        .state('app.solicitud.express', {
            url: '/express',
            data: { pageTitle: 'Solicitud Express' },
            templateUrl: 'views/solicitud_express.html',
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
        .state('app.solicitud.buscar', {
            url: '/buscar',
            data: { pageTitle: 'Solicitud Buscar' },
            templateUrl: 'views/solicitud_buscar.html',
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
        .state('app.moneda', {
            url: '/moneda',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.moneda.todos', {
            url: '/todos',
            data: { pageTitle: 'Moneda Todos' },
            templateUrl: 'views/moneda_todos.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/css/buttons.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Buttons/js/dataTables.buttons.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.flash.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/jszip.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/pdfmake.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/vfs_fonts.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.html5.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.print.min.js',

                        ]
                    });
                }]
            }
        })
        .state('app.moneda.crear', {
            url: '/crear',
            data: { pageTitle: 'Moneda Crear' },
            templateUrl: 'views/moneda_crear.html',
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
        .state('app.moneda.tipo', {
            url: '/tipo',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.moneda.tipo.todos', {
            url: '/todos',
            data: { pageTitle: 'Moneda Tipo Todos' },
            templateUrl: 'views/moneda_tipo_todos.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Select/js/dataTables.select.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/css/buttons.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Buttons/js/dataTables.buttons.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.flash.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/jszip.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/pdfmake.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/vfs_fonts.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.html5.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.print.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.moneda.tipo.crear', {
            url: '/crear',
            data: { pageTitle: 'Moneda Tipo Crear' },
            templateUrl: 'views/moneda_tipo_crear.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/masked-input/masked-input.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.moneda.tipo.buscar', {
            url: '/buscar',
            data: { pageTitle: 'Moneda Tipo Buscar' },
            templateUrl: 'views/moneda_tipo_buscar.html'
        })
        .state('app.moneda.tipo.editar', {
            url: '/editar/:id',
            data: { pageTitle: 'Moneda Tipo Editar' },
            templateUrl: 'views/moneda_tipo_editar.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootbox/bootbox.min.js',
                            'assets/plugins/masked-input/masked-input.min.js',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js'
                        ]
                    });
                }]
            }
        })
        .state('app.moneda.tipo.eliminar', {
            url: '/eliminar/:id',
            data: { pageTitle: 'Moneda Tipo Eliminar' },
            templateUrl: 'views/moneda_tipo_eliminar.html'
        })
        .state('app.licencia', {
            url: '/licencia',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.licencia.todos', {
            url: '/todos',
            data: { pageTitle: 'Licencia Todos' },
            templateUrl: 'views/licencia_todos.html'
        })
        .state('app.licencia.tipo', {
            url: '/tipo',
            data: { pageTitle: 'Licencia Tipo' },
            templateUrl: 'views/licencia_tipo.html'
        })
        .state('app.licencia.crear', {
            url: '/crear',
            data: { pageTitle: 'Licencia Crear' },
            templateUrl: 'views/licencia_crear.html'
        })
        .state('app.licencia.editar', {
            url: '/editar',
            data: { pageTitle: 'Licencia Editar' },
            templateUrl: 'views/licencia_editar.html'
        })
        .state('app.control', {
            url: '/control',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.control.todos', {
            url: '/todos',
            data: { pageTitle: 'Licencia Todos' },
            templateUrl: 'views/control_todos.html'
        })
        .state('app.control.ingreso', {
            url: '/ingreso',
            data: { pageTitle: 'Control de Ingreso' },
            templateUrl: 'views/control_ingreso.html'
        })
        .state('app.control.salida', {
            url: '/salida',
            data: { pageTitle: 'Control de Salida' },
            templateUrl: 'views/control_salida.html'
        })
        .state('app.sello', {
            url: '/sello',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.sello.todos', {
            url: '/todos',
            data: { pageTitle: 'Sello todos' },
            templateUrl: 'views/sello_todos.html',
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
        .state('app.sello.crear', {
            url: '/crear',
            data: { pageTitle: 'Sello Asignar' },
            templateUrl: 'views/sello_crear.html',
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

        .state('app.contrato', {
            url: '/contrato',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.contrato.todos', {
            url: '/todos',
            data: { pageTitle: 'Contrato Todos' },
            templateUrl: 'views/contrato_todos.html'
        })
        .state('app.contrato.crear', {
            url: '/crear',
            data: { pageTitle: 'Contrato Crear' },
            templateUrl: 'views/contrato_crear.html',
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
        .state('app.contrato.buscar', {
            url: '/buscar',
            data: { pageTitle: 'Contrato Buscar' },
            templateUrl: 'views/contrato_buscar.html'
        })
        .state('app.contrato.eliminar', {
            url: '/eliminar',
            data: { pageTitle: 'Contrato Eliminar' },
            templateUrl: 'views/contrato_eliminar.html'
        })
        .state('app.contrato.editar', {
            url: '/editar',
            data: { pageTitle: 'Contrato Editar' },
            templateUrl: 'views/contrato_editar.html'
        })
        .state('app.flota', {
            url: '/flota',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.flota.todos', {
            url: '/todos',
            data: { pageTitle: 'Flota Todos' },
            templateUrl: 'views/flota_todos.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.flota.crear', {
            url: '/crear',
            data: { pageTitle: 'Flota Crear' },
            templateUrl: 'views/flota_crear.html'
        })
        .state('app.flota.buscar', {
            url: '/buscar',
            data: { pageTitle: 'Flota Buscar' },
            templateUrl: 'views/flota_buscar.html'
        })
        .state('app.flota.eliminar', {
            url: '/eliminar',
            data: { pageTitle: 'Flota Eliminar' },
            templateUrl: 'views/flota_eliminar.html'
        })
        .state('app.flota.editar', {
        url: '/editar',
        data: { pageTitle: 'Flota Editar' },
        templateUrl: 'views/flota_editar.html'
        })
        .state('app.proveedor', {
            url: '/proveedor',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.proveedor.todos', {
            url: '/todos',
            data: { pageTitle: 'Proveedor Todos' },
            templateUrl: 'views/proveedor_todos.html'
        })
        .state('app.proveedor.crear', {
            url: '/crear',
            data: { pageTitle: 'Proveedor Crear' },
            templateUrl: 'views/proveedor_crear.html',
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
        .state('app.proveedor.buscar', {
            url: '/buscar',
            data: { pageTitle: 'Proveedor Buscar' },
            templateUrl: 'views/proveedor_buscar.html'
        })
        .state('app.proveedor.eliminar', {
            url: '/eliminar',
            data: { pageTitle: 'Proveedor Eliminar' },
            templateUrl: 'views/proveedor_eliminar.html'
        })
        .state('app.proveedor.editar', {
            url: '/editar/:id',
            data: { pageTitle: 'Proveedor Editar' },
            templateUrl: 'views/proveedor_editar.html',
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
        .state('app.proveedor.tipo', {
            url: '/proveedor_tipo',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.proveedor.tipo.todos', {
            url: '/todos',
            data: { pageTitle: 'Proveedor Tipo Todos' },
            templateUrl: 'views/proveedor_tipo_todos.html'
        })
        .state('app.proveedor.tipo.crear', {
            url: '/crear',
            data: { pageTitle: 'Proveedor Tipo Crear' },
            templateUrl: 'views/proveedor_tipo_crear.html',
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
        .state('app.proveedor.tipo.buscar', {
            url: '/buscar',
            data: { pageTitle: 'Proveedor Tipo Buscar' },
            templateUrl: 'views/proveedor_tipo_buscar.html'
        })
        .state('app.proveedor.tipo.eliminar', {
            url: '/eliminar',
            data: { pageTitle: 'Proveedor Tipo Eliminar' },
            templateUrl: 'views/proveedor_tipo_eliminar.html'
        })
        .state('app.proveedor.tipo.editar', {
            url: '/editar/:id',
            data: { pageTitle: 'Proveedor Tipo Editar' },
            templateUrl: 'views/proveedor_tipo_editar.html',
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



        .state('app.consulta', {
            url: '/consulta',
            template: '<div ui-view></div>',
            abstract: true
        })
        //Pantalla CON-01: CONSULTA DE DESPACHOS PARCIALES
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


        //FAC FACTURACION
        .state('app.facturacion', {
            url: '/facturacion',
            template: '<div ui-view></div>',
            abstract: true
        })
        //----------------------------------------------------------------------------------------------------------
        //FAC-AOF MANTENDORES DE PROVEEDORES
        //----------------------------------------------------------------------------------------------------------
        .state('app.facturacion.aprobacion', {
            url: '/aprobacion',
            template: '<div ui-view></div>',
            abstract: true
        })
        //FAC-APRU
        .state('app.facturacion.aprobacion.aprueba', {
            url: '/aprueba',
            data: { pageTitle: 'Facturación - Aprobacion OF ' },
            templateUrl: 'views/Facturacion/Aprobacion/aprueba.html',
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
        .state('app.facturacion.objeciones', {
            url: '/objeciones',
            template: '<div ui-view></div>',
            abstract: true
        })
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





        //MAN MANTENEDORES
        .state('app.mantenedores', {
            url: '/mantenedores',
            template: '<div ui-view></div>',
            abstract: true
        })
            //----------------------------------------------------------------------------------------------------------
            //MAN-PROV MANTENDORES DE PROVEEDORES
            //----------------------------------------------------------------------------------------------------------
                .state('app.mantenedores.proveedores', {
                    url: '/proveedores',
                    template: '<div ui-view></div>',
                    abstract: true
                })
            //MAN-PROV-LIS
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
            //MAN-PROV-AGR
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
            //MAN-PROV-DET
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
            //MAN-PROV-EDI
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
            //MAN-PROV_DEL
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
            // FIN MAN-PROV
        //FIN MAN





        //B2B BUSINESS TO BUSINESS
        .state('app.b2b', {
            url: '/b2b',
            template: '<div ui-view></div>',
            abstract: true
        })
        //--------------------------------------------------------------------------------------------------------------
        //B2B-TRAN BUSINESS TO BUSSINESS TRANSPORTISTA
        //--------------------------------------------------------------------------------------------------------------
        .state('app.b2b.transportista', {
            url: '/transportista',
            template: '<div ui-view></div>',
            abstract: true
        })
            //B2B-TRAN-ACE
            .state('app.b2b.transportista.aceptar', {
                url: '/aceptar',
                data: { pageTitle: 'Aceptar Publicaciones' },
                templateUrl: 'views/B2B/Transportista/b2b_aceptar.html',
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
            //B2B-TRAN-DES
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
            //B2B-TRAN-OCF
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
            //B2B-TAN-FAC
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
        //FIN B2B-TRAN
}]);

colorAdminApp.run(['$rootScope', '$state', 'setting', function($rootScope, $state, setting) {
    $rootScope.$state = $state;
    $rootScope.setting = setting;
}]);