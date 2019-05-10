import Turn from '../Turn';
import Color from '../Color';
var RandomOrderProvider = /** @class */ (function () {
    function RandomOrderProvider() {
        this.r = Math.floor(Math.random() * 1) === 0;
    }
    RandomOrderProvider.prototype.getPlayer1Turn = function () {
        return this.r ? new Turn(Color.Black) : new Turn(Color.White);
    };
    RandomOrderProvider.prototype.getPlayer2Turn = function () {
        return this.r ? new Turn(Color.White) : new Turn(Color.Black);
    };
    return RandomOrderProvider;
}());
export default RandomOrderProvider;
