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
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js'
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
        .state('app.personal.limitaciones', {
            url: '/limitaciones',
            data: { pageTitle: 'Personal Limitaciones' },
            templateUrl: 'views/personal_limitaciones.html'
        })
        .state('app.personal.restricciones', {
            url: '/restricciones',
            data: { pageTitle: 'Personal Restricciones' },
            templateUrl: 'views/personal_restricciones.html'
        })


        .state('app.moneda', {
            url: '/moneda',
            template: '<div ui-view></div>',
            abstract: true
        })

        .state('app.moneda.todos', {
            url: '/todos',
            data: { pageTitle: 'Moneda Todos' },
            templateUrl: 'views/moneda_todos.html'
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
                            'assets/plugins/bootbox/bootbox.min.js',
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
        .state('app.moneda_tipo', {
            url: '/moneda_tipo',
            template: '<div ui-view></div>',
            abstract: true
        })

        .state('app.moneda_tipo.todos', {
            url: '/todos',
            data: { pageTitle: 'Moneda Tipo Todos' },
            templateUrl: 'views/moneda_tipo_todos.html'
        })
        .state('app.moneda_tipo.crear', {
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
        .state('app.moneda_tipo.buscar', {
            url: '/buscar',
            data: { pageTitle: 'Moneda Tipo Buscar' },
            templateUrl: 'views/moneda_tipo_buscar.html'
        })
        .state('app.moneda_tipo.editar', {
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
        .state('app.moneda_tipo.eliminar', {
            url: '/eliminar',
            data: { pageTitle: 'Moneda Tipo Eliminar' },
            templateUrl: 'views/moneda_tipo_Eliminar.html'
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
        }).state('app.contrato.editar', {
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
            templateUrl: 'views/flota_todos.html'
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
        }).state('app.flota.editar', {
        url: '/editar',
        data: { pageTitle: 'Flota Editar' },
        templateUrl: 'views/flota_editar.html'
        })


        .state('app.table', {
            url: '/table',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.table.basic', {
            url: '/basic',
            data: { pageTitle: 'Basic Table' },
            templateUrl: 'views/table_basic.html'
        })
        .state('app.table.manage', {
            url: '/manage',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.table.manage.default', {
            url: '/default',
            data: { pageTitle: 'Managed Table Default' },
            templateUrl: 'views/table_manage.html',
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
        .state('app.table.manage.autofill', {
            url: '/autofill',
            data: { pageTitle: 'Managed Table Autofill' },
            templateUrl: 'views/table_manage_autofill.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/AutoFill/css/autoFill.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/AutoFill/js/dataTables.autoFill.min.js',
                            'assets/plugins/DataTables/extensions/AutoFill/js/autoFill.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
            
        })
        .state('app.table.manage.buttons', {
            url: '/buttons',
            data: { pageTitle: 'Managed Table Buttons' },
            templateUrl: 'views/table_manage_buttons.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Buttons/css/buttons.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/dataTables.buttons.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.flash.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/jszip.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/pdfmake.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/vfs_fonts.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.html5.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.print.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.colReorder', {
            url: '/colreorder',
            data: { pageTitle: 'Managed Table ColReorder' },
            templateUrl: 'views/table_manage_colreorder.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/ColReorder/css/colReorder.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/ColReorder/js/dataTables.colReorder.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.fixedColumns', {
            url: '/fixed-column',
            data: { pageTitle: 'Managed Table Fixed Columns' },
            templateUrl: 'views/table_manage_fixed_columns.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/FixedColumns/css/fixedColumns.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/FixedColumns/js/dataTables.fixedColumns.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.fixedHeader', {
            url: '/fixed-header',
            data: { pageTitle: 'Managed Table Fixed Header' },
            templateUrl: 'views/table_manage_fixed_header.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/FixedHeader/css/fixedHeader.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/FixedHeader/js/dataTables.fixedHeader.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.keyTable', {
            url: '/keytable',
            data: { pageTitle: 'Managed Table KeyTable' },
            templateUrl: 'views/table_manage_keytable.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/KeyTable/css/keyTable.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/KeyTable/js/dataTables.keyTable.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.responsive', {
            url: '/responsive',
            data: { pageTitle: 'Managed Table Responsive' },
            templateUrl: 'views/table_manage_responsive.html',
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
        .state('app.table.manage.rowReorder', {
            url: '/rowreorder',
            data: { pageTitle: 'Managed Table RowReorder' },
            templateUrl: 'views/table_manage_rowreorder.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/RowReorder/css/rowReorder.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/RowReorder/js/dataTables.rowReorder.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.scroller', {
            url: '/scroller',
            data: { pageTitle: 'Managed Table Scroller' },
            templateUrl: 'views/table_manage_scroller.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Scroller/css/scroller.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Scroller/js/dataTables.scroller.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.select', {
            url: '/select',
            data: { pageTitle: 'Managed Table Select' },
            templateUrl: 'views/table_manage_select.html',
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
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.combine', {
            url: '/combine',
            data: { pageTitle: 'Managed Table Extension Combination' },
            templateUrl: 'views/table_manage_combine.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Buttons/css/buttons.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/AutoFill/css/autoFill.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/ColReorder/css/colReorder.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/KeyTable/css/keyTable.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/RowReorder/css/rowReorder.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/dataTables.buttons.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.print.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.flash.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.html5.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.colVis.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                            'assets/plugins/DataTables/extensions/AutoFill/js/dataTables.autoFill.min.js',
                            'assets/plugins/DataTables/extensions/ColReorder/js/dataTables.colReorder.min.js',
                            'assets/plugins/DataTables/extensions/KeyTable/js/dataTables.keyTable.min.js',
                            'assets/plugins/DataTables/extensions/RowReorder/js/dataTables.rowReorder.min.js',
                            'assets/plugins/DataTables/extensions/Select/js/dataTables.select.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.chart', {
            url: '/chart',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.chart.flot', {
            url: '/flot',
            data: { pageTitle: 'Flot Chart' },
            templateUrl: 'views/chart_flot.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        name: 'angular-flot',
                        files: [
                            'assets/plugins/flot/jquery.flot.min.js',
                            'assets/plugins/flot/jquery.flot.time.min.js',
                            'assets/plugins/flot/jquery.flot.resize.min.js',
                            'assets/plugins/flot/jquery.flot.pie.min.js',
                            'assets/plugins/flot/jquery.flot.stack.min.js',
                            'assets/plugins/flot/jquery.flot.crosshair.min.js',
                            'assets/plugins/flot/jquery.flot.categories.js',
                            'assets/plugins/flot/angular-flot.js'
                        ]
                    })
                }]
            }
        })
        .state('app.chart.morris', {
            url: '/morris',
            data: { pageTitle: 'Morris Chart' },
            templateUrl: 'views/chart_morris.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'assets/plugins/morris/morris.css',
                            'assets/plugins/morris/raphael.min.js',
                            'assets/plugins/morris/morris.js'
                        ]
                    })
                }]
            }
        })
        .state('app.chart.js', {
            url: '/chart-js',
            data: { pageTitle: 'Chart JS' },
            templateUrl: 'views/chart_js.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        name: 'angles',
                        files: [
                            'assets/plugins/chart-js/chart.js',
                            'assets/plugins/chart-js/angular/angles.js'
                        ]
                    })
                }]
            }
        })
        .state('app.chart.d3', {
            url: '/chart-d3',
            data: { pageTitle: 'Chart d3' },
            templateUrl: 'views/chart_d3.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/nvd3/build/nv.d3.css',
                            'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.2/d3.min.js',
                            'assets/plugins/nvd3/build/nv.d3.js'
                        ]
                    })
                }]
            }
        })
        .state('app.calendar', {
            url: '/calendar',
            data: { pageTitle: 'Calendar' },
            templateUrl: 'views/calendar.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/fullcalendar/lib/moment.min.js',
                            'assets/plugins/fullcalendar/fullcalendar.min.css',
                            'assets/plugins/fullcalendar/fullcalendar.min.js'
                        ]
                    })
                }]
            }
        })
        .state('app.map', {
            url: '/map',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.map.vector', {
            url: '/vector',
            data: { pageTitle: 'Vector Map' },
            templateUrl: 'views/map_vector.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/jquery-jvectormap/jquery-jvectormap-1.2.2.css',
                            'assets/plugins/jquery-jvectormap/jquery-jvectormap-1.2.2.min.js',
                            'assets/plugins/jquery-jvectormap/jquery-jvectormap-world-mill-en.js'
                        ]
                    })
                }]
            }
        })
        .state('app.map.google', {
            url: '/google',
            data: { pageTitle: 'Google Map' },
            templateUrl: 'views/map_google.html'
        })
        .state('app.gallery', {
            url: '/gallery',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.gallery.v1', {
            url: '/v1',
            data: { pageTitle: 'Gallery V1' },
            templateUrl: 'views/gallery.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/isotope/isotope.css',
                            'assets/plugins/lightbox/css/lightbox.css',
                            'assets/plugins/isotope/jquery.isotope.min.js',
                            'assets/plugins/lightbox/js/lightbox-2.6.min.js'
                        ]
                    })
                }]
            }
        })
        .state('app.gallery.v2', {
            url: '/v2',
            data: { pageTitle: 'Gallery V2' },
            templateUrl: 'views/gallery_v2.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/superbox/js/superbox.js'
                        ]
                    })
                }]
            }
        })
        .state('app.options', {
            url: '/options',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.options.pageBlank', {
            url: '/blank',
            data: { pageTitle: 'Blank Page' },
            templateUrl: 'views/page_blank.html'
        })
        .state('app.options.pageWithFooter', {
            url: '/with-footer',
            data: { pageTitle: 'Page with Footer' },
            templateUrl: 'views/page_with_footer.html'
        })
        .state('app.options.pageWithoutSidebar', {
            url: '/without-sidebar',
            data: { pageTitle: 'Page without Sidebar' },
            templateUrl: 'views/page_without_sidebar.html'
        })
        .state('app.options.pageWithRightSidebar', {
            url: '/right-sidebar',
            data: { pageTitle: 'Page with Right Sidebar' },
            templateUrl: 'views/page_with_right_sidebar.html'
        })
        .state('app.options.pageWithMinifiedSidebar', {
            url: '/minified-sidebar',
            data: { pageTitle: 'Page with Minified Sidebar' },
            templateUrl: 'views/page_with_minified_sidebar.html'
        })
        .state('app.options.pageWithTwoSidebar', {
            url: '/two-sidebar',
            data: { pageTitle: 'Page with Two Sidebar' },
            templateUrl: 'views/page_with_two_sidebar.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'assets/plugins/sparkline/jquery.sparkline.js',
                            'assets/plugins/jquery-knob/js/jquery.knob.js'
                        ]
                    })
                }]
            }
        })
        .state('app.options.pageFullHeightContent', {
            url: '/full-height-content',
            data: { pageTitle: 'Full Height Content' },
            templateUrl: 'views/page_full_height.html'
        })
        .state('app.options.pageWithWideSidebar', {
            url: '/wide-sidebar',
            data: { pageTitle: 'Page with Wide Sidebar' },
            templateUrl: 'views/page_with_wide_sidebar.html'
        })
        .state('app.options.pageWithLightSidebar', {
            url: '/light-sidebar',
            data: { pageTitle: 'Page with Light Sidebar' },
            templateUrl: 'views/page_with_light_sidebar.html'
        })
        .state('app.options.pageWithMegaMenu', {
            url: '/light-sidebar',
            data: { pageTitle: 'Page with Mega Menu' },
            templateUrl: 'views/page_with_mega_menu.html'
        })
        .state('app.options.pageWithTopMenu', {
            url: '/top-menu',
            data: { pageTitle: 'Page with Top Menu' },
            templateUrl: 'views/page_with_top_menu.html'
        })
        .state('app.options.pageWithMixedMenu', {
            url: '/mixed-menu',
            data: { pageTitle: 'Page with Mixed Menu' },
            templateUrl: 'views/page_with_mixed_menu.html'
        })
        .state('app.options.pageWithBoxedLayout', {
            url: '/boxed-layout',
            data: { pageTitle: 'Page with Boxed Layout' },
            templateUrl: 'views/page_with_boxed_layout.html'
        })
        .state('app.options.pageWithBoxedMixedMenu', {
            url: '/boxed-mixed-menu',
            data: { pageTitle: 'Page with Mixed Menu Boxed Layout' },
            templateUrl: 'views/page_boxed_layout_with_mixed_menu.html'
        })
        .state('app.options.pageWithTransparentSidebar', {
            url: '/transparent-sidebar',
            data: { pageTitle: 'Page with Transparent Sidebar' },
            templateUrl: 'views/page_with_transparent_sidebar.html'
        })
        .state('app.extra', {
            url: '/extra',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.extra.timeline', {
            url: '/timeline',
            data: { pageTitle: 'Timeline' },
            templateUrl: 'views/extra_timeline.html'
        })
        .state('app.extra.searchResults', {
            url: '/search-results',
            data: { pageTitle: 'Search Results' },
            templateUrl: 'views/extra_search_results.html'
        })
        .state('app.extra.invoice', {
            url: '/invoice',
            data: { pageTitle: 'Invoice' },
            templateUrl: 'views/extra_invoice.html'
        })
        .state('app.extra.profile', {
            url: '/profile',
            data: { pageTitle: 'Profile' },
            templateUrl: 'views/extra_profile.html'
        })
        .state('comingSoon', {
            url: '/coming-soon',
            data: { pageTitle: 'Coming Soon' },
            templateUrl: 'views/extra_coming_soon.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'assets/plugins/jquery.countdown/jquery.countdown.css',
                            'assets/plugins/jquery.countdown/jquery.plugin.js',
                            'assets/plugins/jquery.countdown/jquery.countdown.js'
                        ]
                    })
                }]
            }
        })
        .state('error', {
            url: '/error',
            data: { pageTitle: '404 Error' },
            templateUrl: 'views/extra_404_error.html'
        })
        .state('member', {
            url: '/member',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('member.login', {
            url: '/login',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('member.login.v1', {
            url: '/v1',
            data: { pageTitle: 'Login' },
            templateUrl: 'views/login.html'
        })
        .state('member.login.v2', {
            url: '/v2',
            data: { pageTitle: 'Login V2' },
            templateUrl: 'views/login_v2.html'
        })
        .state('member.login.v3', {
            url: '/v3',
            data: { pageTitle: 'Login V3' },
            templateUrl: 'views/login_v3.html'
        })
        .state('member.register', {
            url: '/register',
            data: { pageTitle: 'Register V3' },
            templateUrl: 'views/register_v3.html'
        })
        .state('app.helper', {
            url: '/helper',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.helper.css', {
            url: '/css',
            data: { pageTitle: 'Predefined CSS Classes' },
            templateUrl: 'views/helper_css.html'
        })
}]);

colorAdminApp.run(['$rootScope', '$state', 'setting', function($rootScope, $state, setting) {
    $rootScope.$state = $state;
    $rootScope.setting = setting;
}]);