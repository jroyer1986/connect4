import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Board } from '../shared/models/board';
import { User } from '../shared/models/user';
import { Game } from '../shared/models/game';

@Component({
	selector: "game",
	template: `
		<div class="game">
			<h1>GAME CONTAINER</h1>
			<connect4 (spaceClicked)="onSpaceClicked($event)"></connect4>
		</div>
	`,
	styles: [`
		.game {
			border: 3px solid blue;
		}
		h1 {
			color: blue;
		}
	`]
})
export class GameComponent {
	@Input() game: Game;
	@Output() spaceClicked = new EventEmitter();

	board: Board;
	listOfUsers: User[];
	state: string;
	output: string;
	activePlayer: User;

	setActivePlayer() {
		this.listOfUsers.forEach(element => {
			if(element.isActive === true){
				this.activePlayer = element;
			}
		});
	}

	ngOnInit() {
		console.log("gameboard initializing...");
		this.board = this.game.board;
		this.listOfUsers = this.game.listOfPlayers;
		this.state = this.game.state;
		this.output = this.game.output;
		this.setActivePlayer();
	}

	onSpaceClicked(spaceClicked) {
		if(spaceClicked !== null) {
			console.log(this.activePlayer);

			//send space object up to app level for the API call
			var objectForAPI = {
				space: spaceClicked,
				playerId: this.activePlayer.id,
				gameId: this.game.id
			}
			this.spaceClicked.emit(objectForAPI);
		}
	}
}