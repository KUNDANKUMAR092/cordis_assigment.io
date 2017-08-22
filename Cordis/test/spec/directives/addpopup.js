'use strict';

describe('Directive: addPopup', function () {

  // load the directive's module
  beforeEach(module('cordisApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<add-popup></add-popup>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the addPopup directive');
  }));
});
