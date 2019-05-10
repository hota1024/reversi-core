"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = require("./Color");
var Tile = /** @class */ (function () {
    function Tile(color) {
        this.set(color);
    }
    Object.defineProperty(Tile.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set with color
     * @param color Color
     */
    Tile.prototype.set = function (color) {
        this._color = new Color_1.default(color.color);
    };
    /**
     * Return flipped tile
     */
    Tile.prototype.flipped = function () {
        return new Tile(this._color.flipped());
    };
    /**
     * Flip tile
     */
    Tile.prototype.flip = function () {
        this._color.flip();
        return this;
    };
    /**
     * Is black
     */
    Tile.prototype.isBlack = function () {
        return this._color.is(Color_1.default.Black);
    };
    /**
     * Is white
     */
    Tile.prototype.isWhite = function () {
        return this._color.is(Color_1.default.White);
    };
    /**
     * Is white or black
     */
    Tile.prototype.isWhiteOrBlack = function () {
        return this.isWhite() || this.isBlack();
    };
    /**
     * Is empty
     */
    Tile.prototype.isEmpty = function () {
        return this._color.is(Color_1.default.Empty);
    };
    /**
     * Is wall
     */
    Tile.prototype.isWall = function () {
        return this._color.is(Color_1.default.Wall);
    };
    return Tile;
}());
exports.default = Tile;
