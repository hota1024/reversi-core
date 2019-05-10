"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reversi_1 = require("./Reversi");
var Board_1 = require("./Board");
var Player_1 = require("./Player");
var Turn_1 = require("./Turn");
var Vec2_1 = require("./Vec2");
var ErrorType_1 = require("./ErrorType");
var Color_1 = require("./Color");
var RandomOrderProvider_1 = require("./Orders/RandomOrderProvider");
var Player1FirstOrderProvider_1 = require("./Orders/Player1FirstOrderProvider");
var Player2FirstOrderProvider_1 = require("./Orders/Player2FirstOrderProvider");
var ConsoleOutputProvider_1 = require("./Outputs/ConsoleOutputProvider");
var ProgramPlayer_1 = require("./Players/ProgramPlayer");
var TileCountJudger_1 = require("./Judgers/TileCountJudger");
var ReversiCore = {
    Reversi: Reversi_1.default,
    Board: Board_1.default,
    Player: Player_1.default,
    Turn: Turn_1.default,
    Vec2: Vec2_1.default,
    ErrorType: ErrorType_1.default,
    Color: Color_1.default,
    Orders: {
        RandomOrderProvider: RandomOrderProvider_1.default,
        Player1FirstOrderProvider: Player1FirstOrderProvider_1.default,
        Player2FirstOrderProvider: Player2FirstOrderProvider_1.default
    },
    Outputs: {
        ConsoleOutputProvider: ConsoleOutputProvider_1.default
    },
    Players: {
        ProgramPlayer: ProgramPlayer_1.default
    },
    Judgers: {
        TileCountJudger: TileCountJudger_1.default
    }
};
window.ReversiCore = ReversiCore;
exports.default = ReversiCore;
