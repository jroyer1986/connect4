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
var board_1 = require("../shared/models/board");
var BoardComponent = (function () {
    function BoardComponent() {
        this.spaceClicked = new core_1.EventEmitter();
    }
    BoardComponent.prototype.onSpaceClicked = function (spaceClicked) {
        //push the clicked space up to parent component
        this.spaceClicked.emit(spaceClicked);
    };
    return BoardComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", board_1.Board)
], BoardComponent.prototype, "board", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BoardComponent.prototype, "spaceClicked", void 0);
BoardComponent = __decorate([
    core_1.Component({
        selector: 'connect4',
        template: "\n\t\t<div class=\"board\">\n\t\t\t<h2>BOARD CONTAINER</h2>\n\t\t\t<space (spaceClicked)=\"onSpaceClicked($event)\"></space>\n\n\t\t</div>\n\t",
        styles: ["\n\t\t.board {\n\t\t\tborder: 2px solid red;\n\t\t}\n\t\th2 {\n\t\t\tcolor: red;\n\t\t}\n\t"]
    })
], BoardComponent);
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map