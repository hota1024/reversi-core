import Board from './Board';
import Player from './Player';
import Turn from './Turn';
import IOrderProvider from './IOrderProvider';
import IOutputProvider from './IOutputProvider';
import Vec2 from './Vec2';
import IJudger from './IJudger';
declare class Reversi {
    player1: Player;
    player2: Player;
    order: IOrderProvider;
    output: IOutputProvider;
    judger: IJudger;
    board: Board;
    turn: Turn;
    lastPut: Vec2;
    _isGameOver: boolean;
    constructor(player1: Player, player2: Player, order: IOrderProvider, output: IOutputProvider, judger: IJudger);
    readonly black: Player;
    readonly white: Player;
    initialize(): void;
    /**
     * Put on pos with turn
     * @param pos Vec2
     * @param turn Turn
     */
    put(pos: Vec2, turn: Turn): boolean | void;
    gameOver(): void;
    isGameOver(): boolean;
}
export default Reversi;
