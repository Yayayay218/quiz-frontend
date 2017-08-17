'use strict';

angular.module('YQuiz')
    .controller('detailCtrl', function ($scope) {
        $scope.showSecond = false;
        $scope.play = function () {
            $scope.showSecond = true;
        }
    });
