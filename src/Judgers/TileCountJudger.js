"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Result_1 = require("../Result");
var ResultType_1 = require("../ResultType");
var TileCountJudger = /** @class */ (function () {
    function TileCountJudger() {
    }
    TileCountJudger.prototype.getResult = function (reversi) {
        var blackCount = reversi.black.getTileCount();
        var whiteCount = reversi.white.getTileCount();
        var resultType;
        if (blackCount === whiteCount) {
            resultType = ResultType_1.default.Draw;
        }
        else if (blackCount > whiteCount) {
            resultType = ResultType_1.default.BlackWin;
        }
        else if (blackCount < whiteCount) {
            resultType = ResultType_1.default.WhiteWin;
        }
        return new Result_1.default(reversi.black, reversi.white, resultType);
    };
    return TileCountJudger;
}());
exports.default = TileCountJudger;
