'use strict';

angular
  .module('app')
  .controller('loginCtrl', loginCtrl);

  loginCtrl.$inject = ['UserService']


function loginCtrl(UserService) {
  var vm = this

  vm.login = login

  function login() {
    UserService.Login(vm.username, vm.password, function (res) {
      if (response.success) {
        $location.path('/app');
      }
    })
  }
}
