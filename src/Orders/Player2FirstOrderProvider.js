"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Turn_1 = require("../Turn");
var Color_1 = require("../Color");
var Player2FirstOrderProvider = /** @class */ (function () {
    function Player2FirstOrderProvider() {
    }
    Player2FirstOrderProvider.prototype.getPlayer1Turn = function () {
        return new Turn_1.default(Color_1.default.White);
    };
    Player2FirstOrderProvider.prototype.getPlayer2Turn = function () {
        return new Turn_1.default(Color_1.default.Black);
    };
    return Player2FirstOrderProvider;
}());
exports.default = Player2FirstOrderProvider;
