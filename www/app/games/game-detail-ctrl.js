(function(){

  angular.module('artemisApp').controller('gameDetailCtrl', ['$state', 'artemisApi', '$stateParams', '$http', '$q', 'GameSingle' ,gameDetailCtrl]);

  function gameDetailCtrl($state, artemisApi, $stateParams, $http, $q, GameSingle) {
    var vm = this;

    var games = artemisApi.getGames();
    vm.games = games;

    vm.selectGame = function(id){
      $state.go("app.game-detail");
    };
  }
}());
