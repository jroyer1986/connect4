"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var fakeGameData_1 = require("../shared/models/fakeGameData");
var Connect4API = (function () {
    function Connect4API() {
    }
    Connect4API.getGame = function (gameId) {
        console.log('API getGame called');
        //hit getGame API passing in the gameId.  A json game should be returned.
        var jsonGame = fakeGameData_1.FakeGameData.testGame;
        return jsonGame;
    };
    Connect4API.getGames = function () {
        console.log('API getGames called');
        return null;
    };
    Connect4API.resetGame = function () {
        console.log('API resetGame called');
        return null;
    };
    Connect4API.createPlayer = function (playerName) {
        console.log('API createPlayer called');
        return null;
    };
    Connect4API.createGame = function (user) {
        console.log('API createGame called by ' + user.name);
        //get gameId returned from API to give back to the app and use to call getGame
        return fakeGameData_1.FakeGameData.testGame.id;
    };
    Connect4API.joinGame = function (user, game) {
        console.log('API joinGame called by ' + user.name + ' for game ' + game.id);
        return null;
    };
    Connect4API.play = function (spaceId, playerId, gameId) {
        console.log('API play called by player id # ' + playerId + ' for game ' + gameId);
        return null;
    };
    Connect4API.leave = function (gameId, playerId) {
        console.log('API leave called by player id # ' + playerId + ' for game ' + gameId);
        return null;
    };
    return Connect4API;
}());
Connect4API = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], Connect4API);
exports.Connect4API = Connect4API;
//# sourceMappingURL=connect4API.js.map