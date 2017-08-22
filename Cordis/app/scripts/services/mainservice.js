'use strict';

/**
 * @ngdoc service
 * @name cordisApp.mainService
 * @description
 * # mainService
 * Service in the cordisApp.
 */
angular.module('cordisApp')
  .service('mainService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.fromService = function(){
    	var arr = [
					{
					"firstName": "Joe",
					"middleName": " ",
					"lastName": "Perry",
					"contactNumber": "4448881223",
					"contactEmail": "joe@cordis.us"
					},
					{
					"firstName": "Kate",
					"middleName": " ",
					"lastName": "Will",
					"contactNumber": "2448381213",
					"contactEmail": "kate@cordis.us"
					},
					{
					"firstName": "Harry",
					"middleName": " ",
					"lastName": "Robert",
					"contactNumber": "7441381292",
					"contactEmail": "harry@cordis.us"
					},
					{
					"firstName": "Tom",
					"middleName": " ",
					"lastName": "Bill",
					"contactNumber": "2411881191",
					"contactEmail": "tom@cordis.us"
					},
					{
					"firstName": "Roger",
					"middleName": " ",
					"lastName": "Steel",
					"contactNumber": "1111771231",
					"contactEmail": "roger@cordis.us"
					}
				];

		return arr;
    };

  });
