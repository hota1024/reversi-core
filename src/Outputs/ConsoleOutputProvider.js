"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleOutputProvider = /** @class */ (function () {
    function ConsoleOutputProvider() {
    }
    ConsoleOutputProvider.prototype.initialize = function () { };
    ConsoleOutputProvider.prototype.output = function () {
        this.reversi.board.log();
    };
    ConsoleOutputProvider.prototype.error = function (error) {
        console.log("Can not put " + this.reversi.lastPut.toString() + ".");
    };
    ConsoleOutputProvider.prototype.gameOver = function (result) {
        var text = 'GameOver\nResult:';
        if (result.isDraw) {
            text += 'Draw';
        }
        else if (result.blackWin) {
            text += 'Black Win';
        }
        else if (result.whiteWin) {
            text += 'White Win';
        }
        text += '\n';
        text += "Black: " + result.black.getTileCount() + "\n";
        text += "White: " + result.white.getTileCount() + "\n";
        console.log(text);
    };
    return ConsoleOutputProvider;
}());
exports.default = ConsoleOutputProvider;
