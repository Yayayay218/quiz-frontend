'use strict';

angular.module('YQuiz')
    .controller('detailCtrl', function ($scope, Socialshare, quizService) {
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

        // $scope.shareFB = function () {
        //     window.open('https://www.facebook.com/sharer/sharer.php?u=' + 'http://128.199.148.169',
        //         'facebook-share-dialog',
        //         'width=800,height=600'
        //     );
        //     return false;
        // }

        $scope.shareFB = function () {
            Socialshare.share({
                'provider': 'facebook',
                'attrs': {
                    'socialshareUrl': 'http://128.199.148.169'
                }
            });
        };

        $scope.limit = 0;
        $scope.quizzes = quizService
            .quizGetAll()
            .error(function (e) {
                console.log(e)
            })
            .then(function (res) {
                $scope.quizzes = res.data.data;
                $scope.limit = $scope.quizzes.length - 2;
            })
    });
