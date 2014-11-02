'use strict';

describe('Controller: CreateProjectCtrl', function () {

  // load the controller's module
  beforeEach(module('environmentWashApp'));

  var CreateProjectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateProjectCtrl = $controller('CreateProjectCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
