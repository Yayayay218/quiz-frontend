'use strict';

angular.module('YQuiz')
    .config(function ($stateProvider) {

        $stateProvider

            .state('home', {
                url: '/',
                parent: 'layout',
                views: {
                    'content@': {
                        templateUrl: 'views/home/index.html',
                    }
                }
            });
    });