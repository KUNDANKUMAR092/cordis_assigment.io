'use strict';

/**
 * @ngdoc function
 * @name cordisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cordisApp
 */
angular.module('cordisApp')
  .controller('MainCtrl', function ($scope,mainService, $filter) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.contactList = [];

  	$scope.getUserDetails = function(){
  		$scope.contactList = mainService.fromService();
  	};

  	$scope.addItem = function (person) {
      $scope.contactList.push(person);
      $('#myModal').modal('hide');
      return false;
    }

    $scope.enableEditor = function(item) {
      $scope.person = item;

    };

    $scope.removeData = function() {
      $scope.person = {};
      $scope.personForm.$setPristine();
    };
	

  });
   
