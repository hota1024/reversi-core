import Turn from '../Turn';
import Color from '../Color';
var Player2FirstOrderProvider = /** @class */ (function () {
    function Player2FirstOrderProvider() {
    }
    Player2FirstOrderProvider.prototype.getPlayer1Turn = function () {
        return new Turn(Color.White);
    };
    Player2FirstOrderProvider.prototype.getPlayer2Turn = function () {
        return new Turn(Color.Black);
    };
    return Player2FirstOrderProvider;
}());
export default Player2FirstOrderProvider;
