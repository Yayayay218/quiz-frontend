'use strict';

angular.module('YQuiz')
    .controller('dashboardCtrl', function ($scope, Socialshare, quizService, $stateParams, $location, $timeout, $http, API, Upload) {
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
            $scope.data = {
                title: $scope.quiz.title,
                coverPhoto: $scope.quiz.img,
                results: $scope.results,
                questions: $scope.questions
            }
            // var blob = new Blob([$scope.file], {type: "image/x-png,image/gif,image/jpeg"});
            // var file = new File([blob], 'imageFileName.jpeg');
            // console.log(file);
            // console.log(blob);
            // $scope.upload($scope.data.coverPhoto);
            $http.post(API.URL + 'files',{
                file: $scope.quiz.img
            });

        };
        // upload on file select or drop
        $scope.upload = function (file) {
            Upload.upload({
                url: API.URL + 'files',
                data: {file: file}
            }).then(function (resp) {
                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });
        };
    });
