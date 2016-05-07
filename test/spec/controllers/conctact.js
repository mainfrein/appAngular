'use strict';

describe('Controller: ConctactCtrl', function () {

  // load the controller's module
  beforeEach(module('appAngularApp'));

  var ConctactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConctactCtrl = $controller('ConctactCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConctactCtrl.awesomeThings.length).toBe(3);
  });
});
