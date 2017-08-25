'use strict';

angular.module('YQuiz')
    .config(function ($stateProvider) {

        $stateProvider

            .state('detail', {
                url: '/detail?id',
                parent: 'layout',
                views: {
                    'content@': {
                        templateUrl: 'views/detail/detail.html',
                        controller: 'detailCtrl'
                    }
                }
            });
    });