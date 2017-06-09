'user strict';
angular
  .module('artemisApp')
  .factory('GameSingle', GameSingle)
  GameSingle.$inject = ['$http', '$q']

  function GameSingle($http, $q) {

    var service = {}

    // service.testFunc = testFunc;
    // service.loadPageWithData = loadPageWithData;

    return service;



    // function testFunc() {
    //   var gameInviteData = $http.get(`https://artemis-api.herokuapp.com/game_invite/?game_id=1`);
    //   return promise = $q.all([gameInviteData])
    //     .then(function(results){
    //       return dataOUT = results[0].data
    //     })
    // }

    // function loadPageWithData () {
    //   window.localStorage['gameId'] = 1;
    //   var id = window.localStorage['gameId'];
    //
    //   var playerData = $http.get(`https://artemis-api.herokuapp.com/games/?id=${id}`);
    //   var usersData = $http.get(`https://artemis-api.herokuapp.com/users`);
    //   var gameInviteData = $http.get(`https://artemis-api.herokuapp.com/game_invite/?game_id=${id}`);
    //   return promise = $q.all([playerData, usersData, gameInviteData])
    //     .then(function(results){
    //
    //       var singleGameDate = {};
    //
    //       console.log("==========");
    //       console.log();
    //
    //       var gameDetails = results[0].data.result[0];
    //       var users = results[1].data.result;
    //       var status = results[2].data.result;
    //       var dateYear = gameDetails.start_time.slice(0, 4);
    //       var dateMonth = gameDetails.start_time.slice(5, 7);
    //       var dateDay = gameDetails.start_time.slice(8, 10);
    //       var gameDateFormated = `${dateMonth}/${dateDay}/${dateYear}`;
    //       var dateTime = gameDetails.start_time.slice(11, 16);
    //       var dateMeridian = getMeridian(dateTime);
    //       var gameTimeFormated = `${dateTime} ${dateMeridian}`;
    //
    //       singleGameDate.players: playerStatus
    //       singleGameDate.date: gameDateFormated
    //       singleGameDate.time: gameTimeFormated;
    //       singleGameDate.otherData: gameDetails;
    //
    //       //builds and populates the playerStatus array of objects for single game display
    //       var playerStatus = []
    //       // console.log(playerStatus);
    //       users.map(function(element) {
    //         status.forEach(function(ele) {
    //           if (element.id === ele.user_id) {
    //             if (ele.invite_status != "declined") {
    //               playerStatus.push({
    //                 name: element.display_name,
    //                 status: ele.invite_status
    //               })
    //             }
    //           }
    //         })
    //       })
    //     })
    //     console.log(">>>><<<<");
    //     console.log(singleGameDate);
    //     return singleGameDate;
    // }
    //
    // function getMeridian(time) {
    //   if (time.slice(0, 2) >= 12) {
    //     return "PM"
    //   } else {
    //     return "AM"
    //   }
    // }

  }
