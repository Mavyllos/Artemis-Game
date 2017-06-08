(function(){

  angular.module('artemisApp').controller('gamesCtrl', ['$state', 'artemisApi', 'GameInfoService', gamesCtrl]);

  function gamesCtrl($state, artemisApi, GameInfoService) {
    const vm = this;

    var games = GameInfoService.GetAllGames();
    console.log(games);
    vm.games = games;

    vm.selectGame = function(id){
    $state.go("app.game-detail");
  };
  }
}());
