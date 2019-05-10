class Vec2 {
  x: number
  y: number

  constructor(x: any = 0, y: number = 0) {
    this.set(x, y)
  }

  /**
   * Move by arguments
   * @param x number
   * @param y number
   */
  moveBy(x: any = 0, y: number = 0) {
    this.set(this.movedBy(x, y))
  }

  /**
   * Return moved
   * @param x number
   * @param y number
   */
  movedBy(x: any = 0, y: number = 0) {
    let other = new Vec2(x, y)
    return new Vec2(this.x + other.x, this.y + other.y)
  }

  /**
   * Return raw object
   */
  raw() {
    return {
      x: this.x,
      y: this.y
    }
  }

  /**
   * Set x and y
   * @param x number
   * @param y number
   */
  set(x: any = 0, y: number = 0) {
    if (typeof x === 'number') {
      return this.setWithNumbers(x, y)
    }
    if (typeof x === 'object') {
      return this.setWithObject(x)
    }
    throw new Error('[ReversiCore] Unexpected arguments.')
  }

  /**
   * Set with number
   * @param x number
   * @param y number
   */
  setWithNumbers(x: number, y: number) {
    this.x = x
    this.y = y
    return this
  }

  /**
   * Set with object
   * @param object any
   */
  setWithObject(object: any) {
    if ('x' in object && 'y' in object) {
      this.x = object.x
      this.y = object.y
      return this
    }

    throw new Error('[ReversiCore] object must has x and y properties.')
  }

  /**
   * To string
   */
  toString() {
    return `(${this.x}, ${this.y})`
  }

  /**
   * Compare with other
   * @param other Vec2
   */
  is(other: Vec2) {
    return this.x === other.x && this.y === other.y
  }
}

export default Vec2
