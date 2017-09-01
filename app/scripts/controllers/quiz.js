'use strict';

angular.module('YQuiz')
    .controller('detailCtrl', function ($scope, Socialshare, quizService, $stateParams, $location) {
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
        // $scope.quizzes = [];
        $scope.quizzes = quizService
            .quizGetAll()
            .error(function (e) {
                console.log(e)
            })
            .then(function (res) {
                $scope.quizzes = res.data.data;
                $scope.limit = $scope.quizzes.length - 2;
            });
        if ($location.search().id) {
            $scope.quizById = quizService
                .quizGetOne($location.search().id)
                .error(function (e) {
                    console.log(e)
                })
                .then(function (res) {
                    $scope.quizById = res.data.data;
                });

            $scope.questions = quizService
                .questionByQuiz($location.search().id)
                .error(function (e) {
                    console.log(e)
                })
                .then(function (res) {
                    $scope.questions = res.data.data;
                });
            $scope.indexStt = 0;
            $scope.pickAnswer = function () {
                if (($scope.indexStt + 1) === $scope.questions.length) {
                    $scope.results = quizService
                        .resultByQuiz($location.search().id)
                        .error(function (e) {
                            console.log(e)
                        })
                        .then(function (res) {
                            $scope.results = res.data.data;
                            $scope.randResult = Math.floor(Math.random() * $scope.results.length);
                            console.log($scope.randResult);
                        });

                    $scope.showSecond = false;
                    $scope.showResult = true;
                }
                else
                    $scope.indexStt++;
            };
        }
    });
