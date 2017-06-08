(function(){

  angular.module('artemisApp').controller('gamesCtrl', ['$state', 'artemisApi', 'GameInfoService', gamesCtrl]);

  function gamesCtrl($state, artemisApi, GameInfoService) {
    const vm = this;

    GameInfoService.GetAllGames().then(gameArr => {
      vm.games = gameArr
      console.log(vm.games)
    });

    vm.selectGame = function(id){
    $state.go("app.game-detail");
  };
  }
}());
