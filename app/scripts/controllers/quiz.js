'use strict';

angular.module('YQuiz')
    .controller('detailCtrl', function ($scope, Socialshare, quizService, $stateParams, $location, $timeout, $http, API, ezfb, ngMeta) {
        $scope.showFirst = true;
        $scope.showSecond = false;
        $scope.showResult = false;
        $scope.urlFB = window.location.href;
        // console.log($scope.urlFB);

        $scope.play = function () {
            $scope.showFirst = false;
            $scope.showSecond = true;
        };

        // $scope.shareFB = function () {
        //     window.open('https://www.facebook.com/sharer/sharer.php?u=' + 'http://yquizz.com',
        //         'facebook-share-dialog',
        //         'width=800,height=600'
        //     );
        //     return false;
        // }

        // $scope.shareFB = function () {
        //     var no = 1, callback = function (res) {
        //         console.log('FB.ui callback execution', no++);
        //         console.log('response:', res);
        //     };
        //     ezfb.ui({
        //         method: 'feed',
        //         name: $scope.titleShare,
        //         picture: $scope.thumbShare,
        //         link: $scope.urlFB + "?ref=share",
        //         description: $scope.desShare,
        //     }, callback).then(callback);
        // };

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
                        ngMeta.setTag('image', $scope.thumbShare);
                        $scope.shareFB = function () {
                            FB.ui({
                                method: 'feed',
                                link: $scope.urlFB,
                                source: $scope.thumbShare
                            }, function(response){});
                            // var no = 1, callback = function (res) {
                            //     console.log($scope.urlFB);
                            //     console.log('FB.ui callback execution', no++);
                            //     console.log('response:', res);
                            // };
                            // ezfb.ui({
                            //     method: 'feed',
                            //     name: $scope.titleShare,
                            //     picture: $scope.thumbShare,
                            //     link: $scope.urlFB,
                            //     description: 'Welcome to yquizz',
                            // }, callback).then(callback);
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
                        method: 'feed',
                        link: $scope.urlFB,
                        caption: 'An example caption',
                        source: $scope.thumbShare
                    }, function(response){});
                    // var no = 1, callback = function (res) {
                    //     console.log($scope.urlFB);
                    //     console.log('FB.ui callback execution', no++);
                    //     console.log('response:', res);
                    // };
                    // ezfb.ui({
                    //     method: 'feed',
                    //     name: $scope.titleShare,
                    //     picture: $scope.thumbShare,
                    //     link: $scope.urlFB,
                    //     description: 'Welcome to yquizz',
                    // }, callback).then(callback);
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
