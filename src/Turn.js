var Turn = /** @class */ (function () {
    function Turn(color) {
        this.set(color);
    }
    Turn.prototype.set = function (color) {
        this._color = color;
    };
    Turn.prototype.flipped = function () {
        return new Turn(this._color.flipped());
    };
    Turn.prototype.flip = function () {
        this._color.flip();
        return this;
    };
    Object.defineProperty(Turn.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: true,
        configurable: true
    });
    return Turn;
}());
export default Turn;
