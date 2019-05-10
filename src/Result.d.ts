import Player from './Player';
import ResultType from './ResultType';
declare class Result {
    private _winner;
    private _loser;
    private _black;
    private _white;
    private _isDraw;
    constructor(black: Player, white: Player, type: ResultType);
    readonly winner: Player;
    readonly loser: Player;
    readonly blackWin: boolean;
    readonly whiteWin: boolean;
    readonly black: Player;
    readonly white: Player;
    readonly isDraw: boolean;
}
export default Result;
