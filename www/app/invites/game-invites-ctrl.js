(function(){

  angular.module('artemisApp').controller('gameInvitesCtrl', ['$state', 'artemisApi', gameInvitesCtrl]);

  function gameInvitesCtrl($state, artemisApi) {
    const vm = this;

    var gameInvites = artemisApi.getGameInvites();
    var games = artemisApi.getGames();
    console.log(gameInvites);
    console.log(games);
    vm.gameInvites = gameInvites;
    vm.games = games;

    vm.selectGame = function(id){
    $state.go("app.game-detail");
  };
  }
}());
