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
var connect4API_1 = require("./services/connect4API");
var fakeGameData_1 = require("./shared/models/fakeGameData");
var AppComponent = (function () {
    function AppComponent() {
        this.numberOfColumns = 7;
        this.numberOfRows = 6;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('app initializing...');
    };
    AppComponent.prototype.startNewGame = function (numOfColumns, numOfRows) {
        var createGameData = {
            user: fakeGameData_1.FakeGameData.testGame.listOfPlayers[0],
            numberOfColumns: numOfColumns,
            numberOfRows: numOfRows
        };
        var newGameId = connect4API_1.Connect4API.createGame(createGameData);
        if (newGameId !== null) {
            var game = connect4API_1.Connect4API.getGame(newGameId);
            this.updateGame(game);
        }
    };
    AppComponent.prototype.onColumnClick = function (apiColumn) {
        console.log(apiColumn);
        if (apiColumn !== null) {
            connect4API_1.Connect4API.play(apiColumn.column.id, apiColumn.playerId, apiColumn.gameId);
        }
    };
    AppComponent.prototype.updateGame = function (game) {
        this.game = game;
        console.log("game updated!");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map