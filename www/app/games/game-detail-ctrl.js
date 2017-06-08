(function(){

  angular.module('artemisApp').controller('gameDetailCtrl', ['$state', 'artemisApi', '$stateParams', '$http', '$q',gameDetailCtrl]);

  function gameDetailCtrl($state, artemisApi, $stateParams, $http, $q) {
    const vm = this;

    var games = artemisApi.getGames();
    vm.games = games;

    window.localStorage['gameId'] = 1;
    var id = window.localStorage['gameId'];
    console.log("game id", id);

    var playerData = $http.get(`https://artemis-api.herokuapp.com/games/?id=${id}`);
    var usersData = $http.get(`https://artemis-api.herokuapp.com/users`);
    var gameInviteData = $http.get(`https://artemis-api.herokuapp.com/game_invite/?game_id=${id}`);
    $q.all([playerData, usersData, gameInviteData])
      .then(function(results){
        console.log(results[0].data.result[0]);
        console.log(results[1].data.result);
        console.log(results[2].data.result);

        var gameDetails = results[0].data.result[0];
        var users = results[1].data.result;
        var status = results[2].data.result;
        var dateYear = gameDetails.start_time.slice(0, 4);
        var dateMonth = gameDetails.start_time.slice(5, 7);
        var dateDay = gameDetails.start_time.slice(8, 10);
        var gameDateFormated = `${dateMonth}/${dateDay}/${dateYear}`;
        var dateTime = gameDetails.start_time.slice(11, 16);
        var dateMeridian = getMeridian(dateTime);
        var gameTimeFormated = `${dateTime} ${dateMeridian}`;

        console.log(gameDateFormated);
        console.log(gameTimeFormated)

        //builds and populates the playerStatus array of objects for single game display
        var playerStatus = []
        users.map(element => {
          status.forEach(ele => {
            // console.log(element);
            if (element.id === ele.user_id) {
              if (ele.invite_status != "declined") {
                playerStatus.push({
                  name: element.display_name,
                  status: ele.invite_status
                })
              }
            }
          })
        })


      })


    vm.selectGame = function(id){
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
