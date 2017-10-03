'use strict';

angular.module('YQuiz')
    .controller('detailCtrl', function ($scope, Socialshare, quizService, $stateParams, $location, $timeout, $http, API, ezfb, ngMeta) {
        $scope.showFirst = true;
        $scope.showSecond = false;
        $scope.showResult = false;
        $scope.urlFB = window.location.href;

        $scope.play = function () {
            $scope.showFirst = false;
            $scope.showSecond = true;
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

        if ($stateParams.slug) {
            $scope.quizById = quizService
                .quizGetOne($stateParams.slug)
                .error(function (e) {
                    console.log(e)
                })
                .then(function (res) {
                    $scope.quizById = res.data.data;
                    ngMeta.setTitle($scope.quizById[0].title);
                    ngMeta.setTag('description', $scope.quizById[0].description);
                });
            $timeout(function () {
                $scope.results = quizService
                    .resultByQuiz($scope.quizById[0]._id)
                    .error(function (e) {
                        console.log(e)
                    })
                    .then(function (res) {
                        $scope.results = res.data.data;
                        $scope.randResult = Math.floor(Math.random() * $scope.results.length);
                        $scope.titleShare = $scope.results[$scope.randResult].title;
                        $scope.thumbShare = $scope.results[$scope.randResult].featuredImg;
                        var FBVars = {
                            fbAppId: '1706155966071399',
                            fbShareUrl: $scope.urlFB,
                            fbShareImg: $scope.thumbShare
                        }
                        function createFBShareLink(FBVars) {
                            var url = 'http://www.facebook.com/dialog/feed?app_id=' + FBVars.fbAppId +
                                '&link=' + FBVars.fbShareUrl +
                                '&source=' + FBVars.fbShareImg +
                                '&display=popup';
                            return url;
                        }
                        ngMeta.setTag('image', $scope.thumbShare);
                        $scope.shareFB = function () {

                            FB.ui({
                                method: 'share_open_graph',
                                action_type: 'og.shares',
                                action_properties: JSON.stringify({
                                    object: {
                                        'og:url': $scope.urlFB,
                                        'og:title': $scope.titleShare,
                                        'og:image': $scope.thumbShare
                                    }
                                })
                            }, function(response){});

                        };
                    });

                $scope.questions = quizService
                    .questionByQuiz($scope.quizById[0]._id)
                    .error(function (e) {
                        console.log(e)
                    })
                    .then(function (res) {
                        $scope.questions = res.data.data;
                    });
            }, 1000)

            $scope.indexStt = 0;
            $scope.pickAnswer = function () {
                if (($scope.indexStt + 1) === $scope.questions.length) {
                    FB.ui({
                        method: 'share_open_graph',
                        action_type: 'og.shares',
                        action_properties: JSON.stringify({
                            object: {
                                'og:url': $scope.urlFB,
                                'og:title': $scope.titleShare,
                                'og:image': $scope.thumbShare
                            }
                        })
                    }, function(response){});

                    $scope.showSecond = false;
                    $scope.showResult = true;
                }
                else
                    $scope.indexStt++;
            };
            $scope.nextQuiz = $http.get(API.URL + 'quizzes')
                .error(function (e) {
                    console.log(e);
                })
                .then(function (data) {
                    var randPage = Math.floor(Math.random() * data.data.pages);
                    $scope.next = quizService
                        .quizGetAll(randPage + 1)
                        .error(function (e) {
                            console.log(e);
                        })
                        .then(function (res) {
                            var index = Math.floor(Math.random() * res.data.data.length);
                            $timeout(function () {
                                $scope.next = res.data.data[index];
                            }, 1000);
                        })
                })
        }
    });
