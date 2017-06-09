'use strict';

angular
  .module('artemisApp')
  .controller('loginCtrl', loginCtrl);

  loginCtrl.$inject = ['UserService', '$location', 'GameInfoService']


function loginCtrl(UserService, $location, GameInfoService, InviteService) {
  var vm = this

  vm.login = login

  function login () {
    UserService.Login(login.username, login.password, function (response) {
      if (response.success) {
        GameInfoService.GetAllGames()
        $location.path('/app/dashboard');
      } else {
        console.log("nope");
      }
    })
  }
}
