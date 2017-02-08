import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Board } from '../shared/models/board';
import { Space } from '../shared/models/space';
import { Connect4API } from '../services/connect4API';

@Component({
	selector: 'connect4',
	template: `
		<div class="board">
			<h2>BOARD CONTAINER</h2>
			<space (spaceClicked)="onSpaceClicked($event)"></space>

		</div>
	`,
	styles: [`
		.board {
			border: 2px solid red;
		}
		h2 {
			color: red;
		}
	`]
})
export class BoardComponent {
	@Input() board: Board;
	@Output() spaceClicked = new EventEmitter();

	onSpaceClicked(spaceClicked) {
		//push the clicked space up to parent component
		this.spaceClicked.emit(spaceClicked)
	}
} 