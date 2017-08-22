'use strict';

/**
 * @ngdoc directive
 * @name cordisApp.directive:addPopup
 * @description
 * # addPopup
 */
angular.module('cordisApp')
  .directive('addPopup', function () {
    return {
      templateUrl: 'views/addpopup.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      }
    };
  });
