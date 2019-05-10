"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Turn_1 = require("../Turn");
var Color_1 = require("../Color");
var Player1FirstOrderProvider = /** @class */ (function () {
    function Player1FirstOrderProvider() {
    }
    Player1FirstOrderProvider.prototype.getPlayer1Turn = function () {
        return new Turn_1.default(Color_1.default.Black);
    };
    Player1FirstOrderProvider.prototype.getPlayer2Turn = function () {
        return new Turn_1.default(Color_1.default.White);
    };
    return Player1FirstOrderProvider;
}());
exports.default = Player1FirstOrderProvider;
