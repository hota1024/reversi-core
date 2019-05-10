import Vec2 from './Vec2';
import Tile from './Tile';
import Color from './Color';
import Turn from './Turn';
declare class Board {
    private _tiles;
    readonly width: number;
    readonly height: number;
    readonly tiles: Tile[];
    constructor();
    getIndex(pos: Vec2): number;
    getTile(pos: Vec2): Tile;
    runAngle(pos: Vec2, angle: Vec2, turn: Turn, flip: boolean): boolean;
    run(pos: Vec2, turn: Turn, flip: boolean): boolean;
    put(pos: Vec2, turn: Turn): boolean;
    putablePoints(turn: Turn): Vec2[];
    isPuttable(pos: Vec2, turn: Turn): boolean;
    tileCount(color: Color): number;
    log(): void;
}
export default Board;
