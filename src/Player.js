"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player() {
        this.name = '';
    }
    Object.defineProperty(Player.prototype, "turn", {
        /**
         * Turn of player
         */
        get: function () {
            return this._turn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "reversi", {
        /**
         * Reversi of playing
         */
        get: function () {
            return this._reversi;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set this player
     * @param turn Turn
     */
    Player.prototype.set = function (turn) {
        this.setTurn(turn);
    };
    /**
     * Set turn
     * @param turn Turn
     */
    Player.prototype.setTurn = function (turn) {
        this._turn = turn;
    };
    /**
     * Set reversi
     * @param reversi Reversi
     */
    Player.prototype.setReversi = function (reversi) {
        this._reversi = reversi;
    };
    /**
     * Send put position with turn
     * @param pos Vec2
     */
    Player.prototype.send = function (pos) {
        return this._reversi.put(pos, this._turn);
    };
    /**
     * Compare turn and game turn
     */
    Player.prototype.isMyTurn = function () {
        return this._reversi.turn.color.is(this.turn.color);
    };
    /**
     * Count tile with turn color
     */
    Player.prototype.getTileCount = function () {
        return this._reversi.board.tileCount(this.turn.color);
    };
    Player.prototype.onMyTurn = function () { };
    return Player;
}());
exports.default = Player;
