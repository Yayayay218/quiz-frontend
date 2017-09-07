'use strict';

// Declare app level module which depends on views, and components
var YQuiz = angular.module('YQuiz', ['ui.router', '720kb.socialshare', 'infinite-scroll', 'ezfb']);

YQuiz.config(function ($stateProvider, $urlRouterProvider, $locationProvider, ezfbProvider) {
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
    // $locationProvider.html5Mode(true);
    ezfbProvider.setInitParams({appId: '254929914894031', version: 'v2.8'});
    ezfbProvider.setLocale('en_EN');
});


YQuiz.run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
});

