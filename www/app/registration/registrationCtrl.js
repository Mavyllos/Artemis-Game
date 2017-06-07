
angular
  .module('artemisApp')
  .controller('registrationCtrl', registrationCtrl);

  registrationCtrl.$inject = ['UserService', '$location']

  function registrationCtrl(UserService, $location) {
    var vm = this;



  }
