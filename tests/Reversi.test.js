"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reversi_1 = require("../src/Reversi");
var ProgramPlayer_1 = require("../src/Players/ProgramPlayer");
var RandomOrderProvider_1 = require("../src/Orders/RandomOrderProvider");
var ConsoleOutputProvider_1 = require("../src/Outputs/ConsoleOutputProvider");
var TileCountJudger_1 = require("../src/Judgers/TileCountJudger");
it('Instantiate', function () {
    var player1 = new ProgramPlayer_1.default();
    var player2 = new ProgramPlayer_1.default();
    var reversi = new Reversi_1.default(player1, player2, new RandomOrderProvider_1.default, new ConsoleOutputProvider_1.default, new TileCountJudger_1.default);
    player1.put(3, 4);
});
