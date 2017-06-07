  'use strict'
  angular
    .module('artemisApp')
    .controller('createGameCtrl', createGameCtrl);

    createGameCtrl.$inject = ['MapService', '$location']


  function createGameCtrl(MapService, $location) {
    var vm = this

    vm.checkTarget = checkTarget

    function checkTarget() {
      MapService.Check()
      return "Test";
    }

  }
