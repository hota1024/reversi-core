"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vec2 = /** @class */ (function () {
    function Vec2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.set(x, y);
    }
    /**
     * Move by arguments
     * @param x number
     * @param y number
     */
    Vec2.prototype.moveBy = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.set(this.movedBy(x, y));
    };
    /**
     * Return moved
     * @param x number
     * @param y number
     */
    Vec2.prototype.movedBy = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var other = new Vec2(x, y);
        return new Vec2(this.x + other.x, this.y + other.y);
    };
    /**
     * Return raw object
     */
    Vec2.prototype.raw = function () {
        return {
            x: this.x,
            y: this.y
        };
    };
    /**
     * Set x and y
     * @param x number
     * @param y number
     */
    Vec2.prototype.set = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (typeof x === 'number') {
            return this.setWithNumbers(x, y);
        }
        if (typeof x === 'object') {
            return this.setWithObject(x);
        }
        throw new Error('[ReversiCore] Unexpected arguments.');
    };
    /**
     * Set with number
     * @param x number
     * @param y number
     */
    Vec2.prototype.setWithNumbers = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    /**
     * Set with object
     * @param object any
     */
    Vec2.prototype.setWithObject = function (object) {
        if ('x' in object && 'y' in object) {
            this.x = object.x;
            this.y = object.y;
            return this;
        }
        throw new Error('[ReversiCore] object must has x and y properties.');
    };
    /**
     * To string
     */
    Vec2.prototype.toString = function () {
        return "(" + this.x + ", " + this.y + ")";
    };
    /**
     * Compare with other
     * @param other Vec2
     */
    Vec2.prototype.is = function (other) {
        return this.x === other.x && this.y === other.y;
    };
    return Vec2;
}());
exports.default = Vec2;
