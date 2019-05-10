import Vec2 from './Vec2';
import Tile from './Tile';
import Color from './Color';
import Turn from './Turn';
var Board = /** @class */ (function () {
    function Board() {
        var _this = this;
        this._tiles = [];
        // tslint:disable
        var tileCodes = [
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 0, 0, 0, 0, 0, 0, 0, 0, 3,
            3, 0, 0, 0, 0, 0, 0, 0, 0, 3,
            3, 0, 0, 0, 0, 0, 0, 0, 0, 3,
            3, 0, 0, 0, 1, 2, 0, 0, 0, 3,
            3, 0, 0, 0, 2, 1, 0, 0, 0, 3,
            3, 0, 0, 0, 0, 0, 0, 0, 0, 3,
            3, 0, 0, 0, 0, 0, 0, 0, 0, 3,
            3, 0, 0, 0, 0, 0, 0, 0, 0, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3
        ];
        // tslint:enable
        var tileCodeColors = [Color.Empty, Color.White, Color.Black, Color.Wall];
        tileCodes.forEach(function (code) {
            var color;
            if (code === 0)
                color = Color.Empty;
            if (code === 1)
                color = Color.White;
            if (code === 2)
                color = Color.Black;
            if (code === 3)
                color = Color.Wall;
            var tile = new Tile(color);
            _this._tiles.push(tile);
        });
    }
    Object.defineProperty(Board.prototype, "width", {
        get: function () {
            return 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "height", {
        get: function () {
            return 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "tiles", {
        get: function () {
            return this._tiles;
        },
        enumerable: true,
        configurable: true
    });
    Board.prototype.getIndex = function (pos) {
        return pos.y * this.width + pos.x;
    };
    Board.prototype.getTile = function (pos) {
        return this._tiles[this.getIndex(pos)];
    };
    Board.prototype.runAngle = function (pos, angle, turn, flip) {
        if (this.getTile(pos).isEmpty() === false)
            return false;
        if (this.getTile(pos.movedBy(angle)).color.is(turn.flipped().color) === false) {
            return false;
        }
        if (flip) {
            if (this.runAngle(pos, angle, turn, false) === false)
                return false;
        }
        var runPos = new Vec2(pos);
        do {
            runPos.moveBy(angle);
            var tile = this.getTile(runPos);
            if (tile.isEmpty())
                return false;
            if (tile.color.is(turn.color))
                break;
            if (flip) {
                tile.flip();
            }
        } while (this.getTile(runPos).isWhiteOrBlack());
        return this.getTile(runPos).color.is(turn.color);
    };
    Board.prototype.run = function (pos, turn, flip) {
        var result = false;
        if (this.runAngle(pos, new Vec2(1, 0), turn, flip))
            result = true;
        if (this.runAngle(pos, new Vec2(-1, 0), turn, flip))
            result = true;
        if (this.runAngle(pos, new Vec2(0, 1), turn, flip))
            result = true;
        if (this.runAngle(pos, new Vec2(0, -1), turn, flip))
            result = true;
        if (this.runAngle(pos, new Vec2(1, 1), turn, flip))
            result = true;
        if (this.runAngle(pos, new Vec2(1, -1), turn, flip))
            result = true;
        if (this.runAngle(pos, new Vec2(-1, 1), turn, flip))
            result = true;
        if (this.runAngle(pos, new Vec2(-1, -1), turn, flip))
            result = true;
        if (result && flip) {
            this.getTile(pos).set(turn.color);
        }
        return result;
    };
    Board.prototype.put = function (pos, turn) {
        return this.run(pos, new Turn(turn.color), true);
    };
    Board.prototype.putablePoints = function (turn) {
        var points = [];
        for (var y = 0; y < this.height; ++y) {
            for (var x = 0; x < this.width; ++x) {
                if (this.run(new Vec2(x, y), turn, false)) {
                    points.push(new Vec2(x, y));
                }
            }
        }
        return points;
    };
    Board.prototype.isPuttable = function (pos, turn) {
        return this.run(pos, turn, false);
    };
    Board.prototype.tileCount = function (color) {
        var count = 0;
        this._tiles.forEach(function (tile) {
            if (tile.color.is(color))
                ++count;
            // TODO: ???????????
        });
        return count;
    };
    Board.prototype.log = function () {
        var log = '';
        for (var y = 0; y < this.height; ++y) {
            for (var x = 0; x < this.width; ++x) {
                var tile = this.getTile(new Vec2(x, y));
                if (tile.isBlack())
                    log += '◝ ';
                else if (tile.isWhite())
                    log += '○ ';
                else
                    log += (x + y) % 2 === 0 ? '■ ' : '□ ';
            }
            log += '\n';
        }
        console.log(log);
    };
    return Board;
}());
export default Board;
