'use strict';

angular.module('YQuiz')
    .controller('detailCtrl', function ($scope) {
        $scope.showFirst = true;
        $scope.showSecond = false;
        $scope.showThird = false;
        $scope.showLast = false;
        $scope.showResult = false;

        var url = window.location.href;
        $scope.play = function () {
            $scope.showFirst = false;
            $scope.showSecond = true;
        };
        $scope.pick1 = function () {
            $scope.showSecond = false;
            $scope.showThird = true;
        };
        $scope.pick2 = function () {
            $scope.showThird = false;
            $scope.showLast = true;
        };
        $scope.pick3 = function () {
            $scope.showLast = false;
            $scope.showResult = true;
        };
        
        $scope.shareFB = function () {
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + 'google.com',
                'facebook-share-dialog',
                'width=800,height=600'
            );
            return false;
        }
    });
