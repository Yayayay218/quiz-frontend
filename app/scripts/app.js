'use strict';

// Declare app level module which depends on views, and components
var YQuiz = angular.module('YQuiz', ['ui.router', '720kb.socialshare', 'infinite-scroll']);

YQuiz.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
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
});


YQuiz.run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
});

