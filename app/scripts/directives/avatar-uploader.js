'use strict';

/**
 * @ngdoc directive
 * @name supermariaFrontendApp.directive:avatarUploader
 * @description
 * # avatarUploader
 */

var Link = function (Scope, Element) {

    Element.on('change', 'input[type=file]', function () {
        var input = this;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                Scope.image = e.target.result;
                angular.element(input).siblings('#' + Scope.name + '-image').attr('src', Scope.image);
            };
            reader.readAsDataURL(new Blob([input.files[0]], {
                "type": "image/*"
            }));
        }
    });

};

var avatarUploader = function ($http, API) {

    var directive = {};

    directive.template = '<div>' +
        '  <label for="{{ name }}" class="avatar-uploader">' +
        '    <div class="cloud">' +
        '      <img src="/images/icons/upload-cloud.png" alt="">' +
        '    </div>' +
        '    <span class="tips">Upload <br>your photo here</span>' +
        '    <input type="file" name="{{ name }}" id="{{ name }}">' +
        '    <img id="{{ name }}-image" on-error-src="http://placehold.it/85x85/7f8c8d/ffffff?text=ERROR">' +
        '    <img ng-if="image" class="image-avatar" ng-src="image" id="{{ name }}-image" on-error-src="http://placehold.it/85x85/7f8c8d/ffffff?text=ERROR">' +
        '  </label>' +
        '  <div class="error-message" ng-if="error">{{ error[0] }}</div>' +
        '</div>';
    directive.scope = {
        image: '=',
        error: '=',
        name: '@'
    };
    directive.replace = true;
    directive.restrict = 'E';
    directive.link = Link;

    return directive;
};

angular.module('YQuiz')
    .directive('avatarUploader', avatarUploader);
