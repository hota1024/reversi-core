"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = require("../src/Color");
it('Instantiate', function () {
    var white = new Color_1.default(Color_1.default.ColorCode.White);
    var black = new Color_1.default(Color_1.default.ColorCode.Black);
    var empty = new Color_1.default(Color_1.default.ColorCode.Empty);
    var wall = new Color_1.default(Color_1.default.ColorCode.Wall);
    expect(white.color).toBe(Color_1.default.ColorCode.White);
    expect(black.color).toBe(Color_1.default.ColorCode.Black);
    expect(empty.color).toBe(Color_1.default.ColorCode.Empty);
    expect(wall.color).toBe(Color_1.default.ColorCode.Wall);
});
it('Static generate', function () {
    var white = Color_1.default.White;
    var black = Color_1.default.Black;
    var empty = Color_1.default.Empty;
    var wall = Color_1.default.Wall;
    expect(white.color).toBe(Color_1.default.ColorCode.White);
    expect(black.color).toBe(Color_1.default.ColorCode.Black);
    expect(empty.color).toBe(Color_1.default.ColorCode.Empty);
    expect(wall.color).toBe(Color_1.default.ColorCode.Wall);
});
it('Is', function () {
    var white = Color_1.default.White;
    var black = Color_1.default.Black;
    var empty = Color_1.default.Empty;
    var wall = Color_1.default.Wall;
    expect(white.is(Color_1.default.White)).toBeTruthy();
    expect(black.is(Color_1.default.Black)).toBeTruthy();
    expect(empty.is(Color_1.default.Empty)).toBeTruthy();
    expect(wall.is(Color_1.default.Wall)).toBeTruthy();
    expect(white.is(Color_1.default.Black)).toBeFalsy();
    expect(black.is(Color_1.default.White)).toBeFalsy();
    expect(empty.is(Color_1.default.Wall)).toBeFalsy();
    expect(wall.is(Color_1.default.Empty)).toBeFalsy();
});
it('Flipped', function () {
    var white = Color_1.default.White;
    var black = Color_1.default.Black;
    var empty = Color_1.default.Empty;
    var wall = Color_1.default.Wall;
    expect(white.flipped().is(Color_1.default.Black)).toBeTruthy();
    expect(black.flipped().is(Color_1.default.White)).toBeTruthy();
    expect(empty.flipped().is(Color_1.default.Empty)).toBeTruthy();
    expect(wall.flipped().is(Color_1.default.Wall)).toBeTruthy();
});
it('Flip', function () {
    var white = Color_1.default.White;
    var black = Color_1.default.Black;
    var empty = Color_1.default.Empty;
    var wall = Color_1.default.Wall;
    white.flip();
    black.flip();
    empty.flip();
    wall.flip();
    expect(white.is(Color_1.default.Black)).toBeTruthy();
    expect(black.is(Color_1.default.White)).toBeTruthy();
    expect(empty.is(Color_1.default.Empty)).toBeTruthy();
    expect(wall.is(Color_1.default.Wall)).toBeTruthy();
});