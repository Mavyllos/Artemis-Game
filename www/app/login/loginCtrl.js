'use strict';

angular
  .module('artemisApp')
  .controller('loginCtrl', loginCtrl);

  loginCtrl.$inject = ['UserService', '$location']


function loginCtrl(UserService, $location) {
  var vm = this

  vm.login = login

  function login () {
    UserService.Login(login.username, login.password, function (response) {
      if (response.success) {
        $location.path('/app/dashboard');
      } else {
        console.log("nope");
      }
    })
  }
}
