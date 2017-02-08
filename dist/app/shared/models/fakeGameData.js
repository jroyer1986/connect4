"use strict";
var FakeGameData = (function () {
    function FakeGameData() {
    }
    return FakeGameData;
}());
FakeGameData.testGame = {
    id: "GAME1",
    board: {
        id: "BOARD1",
        spaces: [
            {
                id: "SPACE1",
                state: "unplayed",
                isAvailable: true,
                owner: null
            },
            {
                id: "SPACE2",
                state: "played",
                isAvailable: false,
                owner: {
                    id: "TESTPLAYER2",
                    name: "testBenaldo",
                    isActive: true
                }
            }
        ]
    },
    listOfPlayers: [
        {
            id: "TESTPLAYER1",
            name: "testJustin",
            isActive: false
        },
        {
            id: "TESTPLAYER2",
            name: "testBenaldo",
            isActive: true
        }
    ],
    state: "active",
    output: ""
};
exports.FakeGameData = FakeGameData;
;
//# sourceMappingURL=fakeGameData.js.map