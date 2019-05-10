import Turn from '../Turn';
import Color from '../Color';
var Player1FirstOrderProvider = /** @class */ (function () {
    function Player1FirstOrderProvider() {
    }
    Player1FirstOrderProvider.prototype.getPlayer1Turn = function () {
        return new Turn(Color.Black);
    };
    Player1FirstOrderProvider.prototype.getPlayer2Turn = function () {
        return new Turn(Color.White);
    };
    return Player1FirstOrderProvider;
}());
export default Player1FirstOrderProvider;
