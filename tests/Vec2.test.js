"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vec2_1 = require("../src/Vec2");
it('Instantiate', function () {
    var p1 = new Vec2_1.default(32, 413);
    var p2 = new Vec2_1.default({ x: 213, y: 132 });
    var p3 = new Vec2_1.default(new Vec2_1.default(432, 51));
    expect(p1.x === 32).toBeTruthy();
    expect(p1.y === 413).toBeTruthy();
    expect(p2.x === 213).toBeTruthy();
    expect(p2.y === 132).toBeTruthy();
    expect(p3.x === 432).toBeTruthy();
    expect(p3.y === 51).toBeTruthy();
});
