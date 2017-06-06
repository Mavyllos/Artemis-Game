(function(){

  angular.module('artemisApp').controller('gamesCtrl', ['$state', 'artemisApi', gamesCtrl]);

  function gamesCtrl($state, artemisApi) {
    const vm = this;

    var games = artemisApi.getGames();
    console.log(games);
    vm.games = games;

    vm.selectGame = function(id){
    $state.go("app.game-detail");
  };
  }
}());
