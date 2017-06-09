(function(){

  angular.module('artemisApp').controller('gameDetailCtrl', ['$state', 'artemisApi', '$stateParams', '$http', '$q', 'GameSingle' ,gameDetailCtrl]);

  function gameDetailCtrl($state, artemisApi, $stateParams, $http, $q, GameSingle) {
    var vm = this;

    var games = artemisApi.getGames();
    vm.games = games;

    // window.localStorage['gameId'] = 1;
    // var id = window.localStorage['gameId'];

    // var singleGameObject = {name:"Test name"};
    // vm.singleGameObject = singleGameObject

    // GameSingle.testFunc().then(function(dataOUT){
    //   vm.test = dataOUT.result[1].invite_status
    //   singleGameObject.name = dataOUT.result[1].invite_status
    //   console.log(dataOUT.result[1].invite_status);
    //
    // })
    //
    // GameSingle.loadPageWithData().then(function(singleGameDate){
    //   vm.singleGameObject = singleGameDate
    //   console.log(singleGameDate);
    // })

    // console.log(singleGameObject);

    vm.selectGame = function(id){
      $state.go("app.game-detail");
    };
  }



}());
