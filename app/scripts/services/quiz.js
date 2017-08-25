'use strict';

angular.module('YQuiz')
    .service('quizService', quizService);

function quizService(API, $http) {
    var quizGetAll = function () {
        return $http.get(API.URL + 'quizzes?sort=-createdAt');
    };

    var quizGetOne = function (id) {
        return $http.get(API.URL + 'quizzes?id=' + id);
    };

    var questionByQuiz = function (id) {
        return $http.get(API.URL + 'questions?quiz=' + id);
    };
    return {
        quizGetAll: quizGetAll,
        quizGetOne: quizGetOne,
        questionByQuiz: questionByQuiz
    }
}