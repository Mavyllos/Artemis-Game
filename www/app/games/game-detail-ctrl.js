(function(){
  angular.module('artemisApp').controller('gameDetailCtrl', ['$state', 'artemisApi', gameDetailCtrl]);

  function gameDetailCtrl($state, artemisApi) {
    const vm = this;

    var games = artemisApi.getGames();
    console.log("outside");
    vm.games = games;


    vm.selectGame = function(id){
      console.log("inside");
      console.log(id);
    $state.go("app.game-detail");
  };
  }

  function getMeridian(time) {
    if (time.slice(0, 2) >= 12) {
      return "PM"
    } else {
      return "AM"
    }
  }

}());
