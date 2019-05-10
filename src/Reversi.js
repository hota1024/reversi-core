import Board from './Board';
import Turn from './Turn';
import Vec2 from './Vec2';
import ErrorType from './ErrorType';
import Color from './Color';
var Reversi = /** @class */ (function () {
    function Reversi(player1, player2, order, output, judger) {
        this.player1 = player1;
        this.player2 = player2;
        this.order = order;
        this.output = output;
        this.judger = judger;
        this.turn = new Turn(Color.Black);
        this.board = new Board();
        player1.setTurn(order.getPlayer1Turn());
        player2.setTurn(order.getPlayer2Turn());
        player1.setReversi(this);
        player2.setReversi(this);
        this._isGameOver = false;
        this.initialize();
        if (this.turn.color.isBlack())
            this.black.onMyTurn();
        if (this.turn.color.isWhite())
            this.white.onMyTurn();
    }
    Object.defineProperty(Reversi.prototype, "black", {
        get: function () {
            return this.player1.turn.color.isBlack() ? this.player1 : this.player2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reversi.prototype, "white", {
        get: function () {
            return this.player1.turn.color.isWhite() ? this.player1 : this.player2;
        },
        enumerable: true,
        configurable: true
    });
    Reversi.prototype.initialize = function () {
        this.output.reversi = this;
        this.output.initialize();
        this.output.output();
    };
    /**
     * Put on pos with turn
     * @param pos Vec2
     * @param turn Turn
     */
    Reversi.prototype.put = function (pos, turn) {
        if (this._isGameOver)
            return false;
        if (this.turn.color.is(turn.color) === false) {
            this.output.error(ErrorType.NotYourTurn);
            return false;
        }
        this.lastPut = new Vec2(pos);
        var result = this.board.put(pos, this.turn);
        if (result) {
            this.turn.flip();
            if (this.board.putablePoints(this.turn).length === 0) {
                this.output.error(ErrorType.Pass);
                this.turn.flip();
                if (this.board.putablePoints(this.turn).length === 0) {
                    return this.gameOver();
                }
            }
            if (this.turn.color.isBlack())
                this.black.onMyTurn();
            if (this.turn.color.isWhite())
                this.white.onMyTurn();
        }
        else {
            this.output.error(ErrorType.CanNotPutHere);
        }
        this.output.output();
        return result;
    };
    Reversi.prototype.gameOver = function () {
        this._isGameOver = true;
        this.output.output();
        this.output.gameOver(this.judger.getResult(this));
    };
    Reversi.prototype.isGameOver = function () {
        return this._isGameOver;
    };
    return Reversi;
}());
export default Reversi;
