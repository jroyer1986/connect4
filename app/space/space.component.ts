import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Space } from '../shared/models/space';
import { Connect4API } from '../services/connect4API';
import { Helpers } from '../services/helpers';

@Component({
	selector: "space",
	template: `
		<div class="space" (click)="handleSpaceClick($event)">
			[O]
		</div>
	`,
	styles: [`
		.space {
			border: 1px solid green;
			background: green;
			width: 60px;
			height: 60px;
			display: block;
			text-align: center;
			vertical-align: middle;
		}
	`]
})
export class SpaceComponent{
	@Output() spaceClicked = new EventEmitter();
	clickedSpace: Space = new Space();

	handleSpaceClick(event){
		if(event !== null){
			//get the current space information to pass up to parent
			this.clickedSpace = {id: "SPACE1", state: "unplayed", isAvailable: true, owner: null};
			this.spaceClicked.emit({ space: this.clickedSpace });
		}
	}
}