(function () {
    'use strict';

    angular.module('artemisApp').factory('artemisApi', [artemisApi]);

    function artemisApi() {

        var users = JSON.parse('');
        var games = JSON.parse('');
        var questions = JSON.parse('');
        var gameUser = JSON.parse('');
        var gameInvite = JSON.parse('');


        function getUsers(){
            return users;
        }

        function getGames(){
            return games;
        }

        function getQuestions(){
            return questions;
        }

        function getGameUser(){
            return gameUser;
        }

        function getGameInvite(){
            return gameInvite;
        }
        return {
            getUsers: getUsers,
            getGames: getGames,
            getQuestions: getQuestions,
            getGameUser: getGameUser,
            getGameInvite: getGameInvite
        };
    }
}());
