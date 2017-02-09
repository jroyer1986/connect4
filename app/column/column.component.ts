import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Board } from '../shared/models/board';
import { Space } from '../shared/models/space';
import { Column } from '../shared/models/column';

@Component({
    selector: 'column',
    template: `
        <div class="column" (click)="onColumnClick($event)">
            <space></space>
        </div>
    `,
    styles: []
})
export class ColumnComponent{
    @Output() columnClickedEmitter = new EventEmitter();
    clickedColumn: Column = new Column();

    onColumnClick(event) {
        if (event !== null){
            this.clickedColumn = {id: "COLUMN1", spaces: []};
            this.columnClickedEmitter.emit(this.clickedColumn);
        }
    }
}