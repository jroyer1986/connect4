"use strict";
var Immutable = require("immutable");
var List = Immutable.List, Map = Immutable.Map, fromJS = Immutable.fromJS;
function createGame(options) {
    return fromJS({
        cols: options.cols,
        rows: options.rows,
        playingTime: 0,
        tiles: initTiles(options.rows, options.cols)
    });
}
exports.createGame = createGame;
function initTiles(rows, cols) {
    return repeat(rows * cols, Map({ isRevealed: false })).
        map(function (tile, idx) {
        return tile.set('id', idx);
    });
}
function repeat(n, val) {
    var res = [];
    while (n--) {
        res.push(val);
    }
    return List(res);
}
function revealTile(game, tile) {
}
exports.revealTile = revealTile;
//# sourceMappingURL=game.js.map