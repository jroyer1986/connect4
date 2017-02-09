import { Component } from '@angular/core';
import { Connect4API } from './services/connect4API';
import { FakeGameData } from './shared/models/fakeGameData';
import { Game } from './shared/models/game';
import { User } from './shared/models/user';
import { CreateGameData } from './shared/models/modelsForConnect4API/createGameData';
import { PlayData } from './shared/models/modelsForConnect4API/playData';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: []
})
export class AppComponent {
	game: Game;

	numberOfColumns: number = 7;
	numberOfRows: number = 6;

	constructor(){}

	ngOnInit(){
		console.log('app initializing...');
	}

	startNewGame(numOfColumns: number, numOfRows: number){
		let createGameData: CreateGameData = {
			user: FakeGameData.testGame.listOfPlayers[0],
			numberOfColumns: numOfColumns,
			numberOfRows: numOfRows
		};

		let newGameId: string = Connect4API.createGame(createGameData);

		if(newGameId !== null){
			let game = Connect4API.getGame(newGameId);
			this.updateGame(game);
		}
	}

	onColumnClick(apiColumn) {
		let playData: PlayData = {
			columnId: apiColumn.columnId,
			playerId: apiColumn.playerId,
			gameId: apiColumn.gameId
		};
		if(apiColumn !== null) {
			Connect4API.play(playData);
		}
	}

	updateGame(game: Game) {
		this.game = game;
		console.log("game updated!");
	}
}