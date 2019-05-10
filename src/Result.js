"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResultType_1 = require("./ResultType");
var Result = /** @class */ (function () {
    function Result(black, white, type) {
        this._black = black;
        this._white = white;
        this._isDraw = false;
        if (type === ResultType_1.default.Draw) {
            this._isDraw = true;
        }
        else if (type === ResultType_1.default.BlackWin) {
            this._winner = black;
            this._loser = white;
        }
        else if (type === ResultType_1.default.WhiteWin) {
            this._winner = white;
            this._loser = black;
        }
    }
    Object.defineProperty(Result.prototype, "winner", {
        get: function () {
            return this._winner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Result.prototype, "loser", {
        get: function () {
            return this._loser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Result.prototype, "blackWin", {
        get: function () {
            return this._winner === this._black;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Result.prototype, "whiteWin", {
        get: function () {
            return this._winner === this._white;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Result.prototype, "black", {
        get: function () {
            return this._black;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Result.prototype, "white", {
        get: function () {
            return this._white;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Result.prototype, "isDraw", {
        get: function () {
            return this._isDraw;
        },
        enumerable: true,
        configurable: true
    });
    return Result;
}());
exports.default = Result;
