import Result from '../Result';
import ResultType from '../ResultType';
var TileCountJudger = /** @class */ (function () {
    function TileCountJudger() {
    }
    TileCountJudger.prototype.getResult = function (reversi) {
        var blackCount = reversi.black.getTileCount();
        var whiteCount = reversi.white.getTileCount();
        var resultType;
        if (blackCount === whiteCount) {
            resultType = ResultType.Draw;
        }
        else if (blackCount > whiteCount) {
            resultType = ResultType.BlackWin;
        }
        else if (blackCount < whiteCount) {
            resultType = ResultType.WhiteWin;
        }
        return new Result(reversi.black, reversi.white, resultType);
    };
    return TileCountJudger;
}());
export default TileCountJudger;
