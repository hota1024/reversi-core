declare enum ColorCode {
    White = 0,
    Black = 1,
    Empty = 2,
    Wall = 3
}
declare class Color {
    private _color;
    constructor(color: ColorCode);
    /**
     * Set by ColorCode
     * @param color
     */
    set(color: ColorCode): this;
    /**
     * Compare with other
     * @param other
     */
    is(other: Color): boolean;
    /**
     * Is black
     */
    isBlack(): boolean;
    /**
     * Is white
     */
    isWhite(): boolean;
    /**
     * Is empty
     */
    isEmpty(): boolean;
    /**
     * Is wall
     */
    isWall(): boolean;
    /**
     * Return flipped Color
     */
    flipped(): Color;
    /**
     * Flip this color
     */
    flip(): this;
    readonly color: ColorCode;
    static readonly ColorCode: typeof ColorCode;
    static readonly Black: Color;
    static readonly White: Color;
    static readonly Empty: Color;
    static readonly Wall: Color;
}
export default Color;
