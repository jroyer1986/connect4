import { Component } from '@angular/core';
import { Connect4API } from './services/connect4API';
import { Game } from './shared/models/game';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: []
})
export class AppComponent {
	game: Game;
	constructor(){}

	ngOnInit(){
		console.log('app initializing...');
	}

	startNewGame(){
		let newGameId: string = Connect4API.createGame({id: "USER1", name: "Justin", isActive: false});
		if(newGameId !== null){
			let game = Connect4API.getGame(newGameId);
			this.updateGame(game);
		}
	}

	onSpaceClicked(spaceClicked) {
		console.log(spaceClicked);
		
	}

	updateGame(game: Game) {
		this.game = game;
		console.log(this.game);
	}
}