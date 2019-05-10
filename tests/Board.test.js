"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board_1 = require("../src/Board");
var Turn_1 = require("../src/Turn");
var Color_1 = require("../src/Color");
var Vec2_1 = require("../src/Vec2");
it('Put', function () {
    var board = new Board_1.default();
    var result = board.put(new Vec2_1.default(3, 4), new Turn_1.default(Color_1.default.Black));
    expect(result).toBeTruthy();
    expect(board.getTile(new Vec2_1.default(3, 4)).color.is(Color_1.default.Black)).toBeTruthy();
    expect(board.getTile(new Vec2_1.default(4, 4)).color.is(Color_1.default.Black)).toBeTruthy();
});
