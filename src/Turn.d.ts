import Color from './Color';
declare class Turn {
    private _color;
    constructor(color: Color);
    set(color: Color): void;
    flipped(): Turn;
    flip(): this;
    readonly color: Color;
}
export default Turn;
