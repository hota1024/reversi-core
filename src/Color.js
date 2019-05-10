"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ColorCode;
(function (ColorCode) {
    ColorCode[ColorCode["White"] = 0] = "White";
    ColorCode[ColorCode["Black"] = 1] = "Black";
    ColorCode[ColorCode["Empty"] = 2] = "Empty";
    ColorCode[ColorCode["Wall"] = 3] = "Wall";
})(ColorCode || (ColorCode = {}));
var Color = /** @class */ (function () {
    function Color(color) {
        this.set(color);
    }
    /**
     * Set by ColorCode
     * @param color
     */
    Color.prototype.set = function (color) {
        this._color = color;
        return this;
    };
    /**
     * Compare with other
     * @param other
     */
    Color.prototype.is = function (other) {
        return this._color === other.color;
    };
    /**
     * Is black
     */
    Color.prototype.isBlack = function () {
        return this.is(Color.Black);
    };
    /**
     * Is white
     */
    Color.prototype.isWhite = function () {
        return this.is(Color.White);
    };
    /**
     * Is empty
     */
    Color.prototype.isEmpty = function () {
        return this.is(Color.Empty);
    };
    /**
     * Is wall
     */
    Color.prototype.isWall = function () {
        return this.is(Color.Wall);
    };
    /**
     * Return flipped Color
     */
    Color.prototype.flipped = function () {
        if (this.is(Color.Black))
            return Color.White;
        if (this.is(Color.White))
            return Color.Black;
        return new Color(this.color);
    };
    /**
     * Flip this color
     */
    Color.prototype.flip = function () {
        return this.set(this.flipped().color);
    };
    Object.defineProperty(Color.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "ColorCode", {
        get: function () {
            return ColorCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Black", {
        get: function () {
            return new Color(ColorCode.Black);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "White", {
        get: function () {
            return new Color(ColorCode.White);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Empty", {
        get: function () {
            return new Color(ColorCode.Empty);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "Wall", {
        get: function () {
            return new Color(ColorCode.Wall);
        },
        enumerable: true,
        configurable: true
    });
    return Color;
}());
exports.default = Color;
