'use strict';

angular.module('YQuiz')
    .service('quizService', quizService);

function quizService(API, $http, $q) {
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

    var uploadPhoto = function (formData) {
        return $http.post(API.URL + 'photos', formData)
            .then(function (res) {
                if (typeof res.data === 'object') {
                    return res.data;
                } else {
                    // invalid response
                    return $q.reject(res.data);
                }
            }, function(res) {
                return $q.reject(res.data);
            })
    };

    var quizCreate = function (formData) {
        return $http.post(API.URL + 'quizzes', formData)
    };

    return {
        quizGetAll: quizGetAll,
        quizGetOne: quizGetOne,
        questionByQuiz: questionByQuiz,
        resultByQuiz: resultByQuiz,
        quizCreate: quizCreate,
        uploadPhoto: uploadPhoto
    }
}