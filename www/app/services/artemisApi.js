(function () {
    'use strict';

    angular.module('artemisApp').factory('artemisApi', [artemisApi]);

    function artemisApi() {
        var users = JSON.parse('[{"id":1,"user_name":"alphaFox1","display_name":"Donny","email":"skibo415@yahoo.com","password":"test123","icon":1,"created_at":"2017-06-05T22:16:35.858Z","updated_at":"2017-06-05T22:16:35.858Z"},{"id":2,"user_name":"evil_lyns1","display_name":"Summer","email":"evil_lyns@yahoo.com","password":"test123","icon":2,"created_at":"2017-06-05T22:16:35.858Z","updated_at":"2017-06-05T22:16:35.858Z"},{"id":3,"user_name":"goredwings","display_name":"Joshua","email":"joshuawarren000@gmail.com","password":"test123","icon":3,"created_at":"2017-06-05T22:16:35.858Z","updated_at":"2017-06-05T22:16:35.858Z"},{"id":4,"user_name":"dasteacher","display_name":"Wes","email":"test@test.com","password":"test123","icon":4,"created_at":"2017-06-05T22:16:35.858Z","updated_at":"2017-06-05T22:16:35.858Z"}]');
        var games = JSON.parse('[{"id":1,"name":"Mission Seattle","description":"As spys your mission will be to find various clues throughout the city and then rally at the final destination","status":"scheduled","start_time":"2017-06-10T09:00:00.000Z","start_loc_lat":"47.598951","start_loc_long":"-122.333802","created_at":"2017-06-05T22:16:35.895Z","updated_at":"2017-06-05T22:16:35.895Z"},{"id":2,"name":"I salute you","description":"Explore the historic locations of Seattle","status":"started","start_time":"2017-06-05T09:00:00.000Z","start_loc_lat":"47.600506","start_loc_long":"-122.333224","created_at":"2017-06-05T22:16:35.895Z","updated_at":"2017-06-05T22:16:35.895Z"},{"id":3,"name":"Test Game","description":"I really hope that this works","status":"complete","start_time":"2017-05-20T09:00:00.000Z","start_loc_lat":"47.610136","start_loc_long":"-122.342057","created_at":"2017-06-05T22:16:35.895Z","updated_at":"2017-06-05T22:16:35.895Z"}]');
        var gameInvites = JSON.parse('[{"user_id":1,"game_id":1,"invite_status":"pending","created_at":"2017-06-06T21:35:33.152Z","updated_at":"2017-06-06T21:35:33.152Z"}, {"user_id":2,"game_id":1,"invite_status":"accepted","created_at":"2017-06-06T21:35:33.152Z","updated_at":"2017-06-06T21:35:33.152Z"}, {"user_id":3,"game_id":1,"invite_status":"accepted","created_at":"2017-06-06T21:35:33.152Z","updated_at":"2017-06-06T21:35:33.152Z"}, {"user_id":4,"game_id":1,"invite_status":"declined","created_at":"2017-06-06T21:35:33.152Z","updated_at":"2017-06-06T21:35:33.152Z"}, {"user_id":1,"game_id":2,"invite_status":"accepted","created_at":"2017-06-06T21:35:33.152Z","updated_at":"2017-06-06T21:35:33.152Z"}, {"user_id":2,"game_id":2,"invite_status":"accepted","created_at":"2017-06-06T21:35:33.152Z","updated_at":"2017-06-06T21:35:33.152Z"}, {"user_id":3,"game_id":2,"invite_status":"accepted","created_at":"2017-06-06T21:35:33.152Z","updated_at":"2017-06-06T21:35:33.152Z"}, {"user_id":4,"game_id":2,"invite_status":"accepted","created_at":"2017-06-06T21:35:33.152Z","updated_at":"2017-06-06T21:35:33.152Z"},{"user_id":1,"game_id":3,"invite_status":"accepted","created_at":"2017-06-06T21:35:33.152Z","updated_at":"2017-06-06T21:35:33.152Z"},{"user_id":2,"game_id":3,"invite_status":"declined","created_at":"2017-06-06T21:35:33.152Z","updated_at":"2017-06-06T21:35:33.152Z"},{"user_id":3,"game_id":3,"invite_status":"accepted","created_at":"2017-06-06T21:35:33.152Z","updated_at":"2017-06-06T21:35:33.152Z"},{"user_id":4,"game_id":3,"invite_status":"pending","created_at":"2017-06-06T21:35:33.152Z","updated_at":"2017-06-06T21:35:33.152Z"}]');
        // var questions = JSON.parse();
        // var gameUser = JSON.parse('');


        function getUsers(){
            return users;
        }

        function getGames(){
            return games;
        }

        // function getQuestions(){
        //     return questions;
        // }

        // function getGameUser(){
        //     return gameUser;
        // }

        function getGameInvites(){
            return gameInvites;
        }

        return {
            getUsers: getUsers,
            getGames: getGames,
            // getQuestions: getQuestions,
            // getGameUser: getGameUser,
            getGameInvites: getGameInvites
        };
    }
}());
