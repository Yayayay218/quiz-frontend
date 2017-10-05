'use strict';

angular.module('YQuiz')
    .controller('dashboardCtrl', function ($scope, Socialshare, quizService, $stateParams, $location, $timeout, $http, API) {
        $scope.results = [
            {
                title: '',
                img: ''
            },
            {
                title: '',
                img: ''
            }
        ];

        $scope.questions = [
            {
                title: '',
                img: ''
            },
            {
                title: '',
                img: ''
            }
        ];

        $scope.addNewResult = function () {
            $scope.results.push({
                title: '',
                img: ''
            });
        };

        $scope.addNewQuestion = function () {
            $scope.questions.push({
                title: '',
                img: ''
            })
        };
        $scope.answers = [
            {
                title: ''
            },
            {
                title: ''
            }
        ];
        $scope.addNewAnswer = function () {
            $scope.answers.push({
                type: 0
            })
        };

        $scope.removeQuestion = function (index) {
            $scope.questions.splice(index, 1)
        };
        $scope.removeResult = function (index) {
            $scope.results.splice(index, 1)
        };

        $scope.submit = function () {
            // console.log($scope.quiz.img);

            quizService.uploadPhoto({coverPhoto: $scope.quiz.img})
                .then(function (data) {
                    console.log(data);
                    $scope.data = {
                        title: $scope.quiz.title,
                        description: $scope.quiz.description,
                        coverPhoto: data
                    };
                    quizService.quizCreate($scope.data);
                }, function (err) {
                    console.log(err);
                })
        };
    });
