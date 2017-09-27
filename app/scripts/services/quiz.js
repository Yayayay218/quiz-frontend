'use strict';

angular.module('YQuiz')
    .service('quizService', quizService);

function quizService(API, $http) {
    var quizGetAll = function (page) {
        return $http.get(API.URL + 'quizzes?sort=-_id&page=' + page);
    };

    var quizGetOne = function (slug) {
        return $http.get(API.URL + 'quizzes?slug=' + slug);
    };

    var questionByQuiz = function (id) {
        return $http.get(API.URL + 'questions?quiz=' + id);
    };

    var resultByQuiz = function (id) {
        return $http.get(API.URL + 'results?quiz=' + id);
    };
    return {
        quizGetAll: quizGetAll,
        quizGetOne: quizGetOne,
        questionByQuiz: questionByQuiz,
        resultByQuiz: resultByQuiz
    }
}