'use strict';

angular.module('YQuiz')
    .config(function ($stateProvider) {

        $stateProvider

            .state('dashboard', {
                url: '/admin/dashboard',
                parent: 'layout',
                views: {
                    'content@': {
                        templateUrl: 'views/dashboard/dashboard.html',
                        controller: 'dashboardCtrl'
                    }
                }
            });
    });