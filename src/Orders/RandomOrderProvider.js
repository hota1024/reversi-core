"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Turn_1 = require("../Turn");
var Color_1 = require("../Color");
var RandomOrderProvider = /** @class */ (function () {
    function RandomOrderProvider() {
        this.r = Math.floor(Math.random() * 2) === 0;
    }
    RandomOrderProvider.prototype.getPlayer1Turn = function () {
        return this.r ? new Turn_1.default(Color_1.default.Black) : new Turn_1.default(Color_1.default.White);
    };
    RandomOrderProvider.prototype.getPlayer2Turn = function () {
        return this.r ? new Turn_1.default(Color_1.default.White) : new Turn_1.default(Color_1.default.Black);
    };
    return RandomOrderProvider;
}());
exports.default = RandomOrderProvider;
