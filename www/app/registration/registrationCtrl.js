
angular
  .module('artemisApp')
  .controller('registrationCtrl', registrationCtrl);

  registrationCtrl.$inject = ['UserService', '$location']

  function registrationCtrl(UserService, $location) {
    var vm = this;

    vm.registerUser = registerUser

    function registerUser() {
      UserService.Create(vm.newUser)
      $location.path('/')
    }

  }
