'use strict';

// Declare app level module which depends on views, and components
var YQuiz = angular.module('YQuiz', ['ui.router', '720kb.socialshare', 'infinite-scroll', 'ezfb', 'ngMeta']);

YQuiz.config(function ($stateProvider, $urlRouterProvider, $locationProvider, ezfbProvider, ngMetaProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    // HOME STATES AND NESTED VIEWS ========================================
        .state('layout', {
            views: {
                'header': {
                    templateUrl: 'views/layouts/header.html',
                },

                'footer': {
                    templateUrl: 'views/layouts/footer.html',
                }
            }
        });
    ezfbProvider.setInitParams({appId: '1706155966071399', version: 'v2.8'});
    ezfbProvider.setLocale('en_EN');
});


YQuiz.run(function ($rootScope, $state, ngMeta) {
    ngMeta.init();
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
});

