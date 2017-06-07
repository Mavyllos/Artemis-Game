(function(){

  angular.module('artemisApp').controller('gameDetailCtrl', ['$state', 'artemisApi', gameDetailCtrl]);

  function gameDetailCtrl($state, artemisApi) {
    const vm = this;

    var games = artemisApi.getGames();
    console.log(games);
    vm.games = games;

    vm.selectGame = function(id){
    $state.go("app.game-detail");
  };
  }
}());
