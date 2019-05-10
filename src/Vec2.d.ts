declare class Vec2 {
    x: number;
    y: number;
    constructor(x?: any, y?: number);
    /**
     * Move by arguments
     * @param x number
     * @param y number
     */
    moveBy(x?: any, y?: number): void;
    /**
     * Return moved
     * @param x number
     * @param y number
     */
    movedBy(x?: any, y?: number): Vec2;
    /**
     * Return raw object
     */
    raw(): {
        x: number;
        y: number;
    };
    /**
     * Set x and y
     * @param x number
     * @param y number
     */
    set(x?: any, y?: number): this;
    /**
     * Set with number
     * @param x number
     * @param y number
     */
    setWithNumbers(x: number, y: number): this;
    /**
     * Set with object
     * @param object any
     */
    setWithObject(object: any): this;
    /**
     * To string
     */
    toString(): string;
    /**
     * Compare with other
     * @param other Vec2
     */
    is(other: Vec2): boolean;
}
export default Vec2;
