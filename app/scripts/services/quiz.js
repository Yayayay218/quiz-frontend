'use strict';

angular.module('YQuiz')
    .service('quizService', quizService);

function quizService(API, $http) {
    var quizGetAll = function () {
        return $http.get(API.URL + 'quizzes');
    };

    return {
        quizGetAll: quizGetAll
    }
}