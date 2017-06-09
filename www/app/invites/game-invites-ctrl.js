(function(){

  angular.module('artemisApp').controller('gameInvitesCtrl', ['$state', 'InviteService', gameInvitesCtrl]);

  function gameInvitesCtrl($state, InviteService) {
    var vm = this;

    InviteService.GetInvites().then(function(inviteArr) {
      vm.invites = inviteArr
      console.log(vm.invite)
    });

    vm.selectGame = function(id){
    $state.go("app.game-detail");
  };
  }
}());
