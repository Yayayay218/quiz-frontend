'use strict';

angular.module('YQuiz')
    .controller('detailCtrl', function ($scope, Socialshare, quizService, $stateParams, $location, $timeout, $http, API) {
        $scope.showFirst = true;
        $scope.showSecond = false;
        $scope.showResult = false;

        var url = window.location.href;
        $scope.play = function () {
            $scope.showFirst = false;
            $scope.showSecond = true;
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

        $scope.page = 2;
        $scope.quizzes = {};
        $scope.items = [];
        $scope.quizzes.busy = false;

        $scope.items = quizService
            .quizGetAll(1)
            .error(function (e) {
                console.log(e)
            })
            .then(function (res) {
                $scope.items = res.data.data;
            });
        $scope.loadMore = function () {
            if ($scope.quizzes.busy) return;
            $scope.quizzes.busy = true;
            $http.get(API.URL + 'quizzes?sort=-_id&page=' + $scope.page).success(function (datas) {
                if (datas.data.error == "" || datas.data.data == '') {
                } else {
                    var _items = datas.data;
                    for (var i = 0; i < _items.length; i++) {
                        $scope.items.push(_items[i]);
                    }
                }
            }).finally(function () {
                $scope.quizzes.busy = false;
            });
            $scope.page += 1;
        };

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
