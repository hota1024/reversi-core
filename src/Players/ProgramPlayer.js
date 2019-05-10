"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("../Player");
var Vec2_1 = require("../Vec2");
var ProgramPlayer = /** @class */ (function (_super) {
    __extends(ProgramPlayer, _super);
    function ProgramPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgramPlayer.prototype.put = function (x, y) {
        this.send(new Vec2_1.default(x, y));
    };
    return ProgramPlayer;
}(Player_1.default));
exports.default = ProgramPlayer;
