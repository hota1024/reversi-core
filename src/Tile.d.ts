import Color from './Color';
declare class Tile {
    private _color;
    constructor(color: Color);
    readonly color: Color;
    /**
     * Set with color
     * @param color Color
     */
    set(color: Color): void;
    /**
     * Return flipped tile
     */
    flipped(): Tile;
    /**
     * Flip tile
     */
    flip(): this;
    /**
     * Is black
     */
    isBlack(): boolean;
    /**
     * Is white
     */
    isWhite(): boolean;
    /**
     * Is white or black
     */
    isWhiteOrBlack(): boolean;
    /**
     * Is empty
     */
    isEmpty(): boolean;
    /**
     * Is wall
     */
    isWall(): boolean;
}
export default Tile;
