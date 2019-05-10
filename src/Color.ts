enum ColorCode {
  White,
  Black,
  Empty,
  Wall
}

class Color {
  private _color: ColorCode

  constructor(color: ColorCode) {
    this.set(color)
  }

  /**
   * Set by ColorCode
   * @param color
   */
  set(color: ColorCode) {
    this._color = color
    return this
  }

  /**
   * Compare with other
   * @param other
   */
  is(other: Color) {
    return this._color === other.color
  }

  /**
   * Is black
   */
  isBlack() {
    return this.is(Color.Black)
  }

  /**
   * Is white
   */
  isWhite() {
    return this.is(Color.White)
  }

  /**
   * Is empty
   */
  isEmpty() {
    return this.is(Color.Empty)
  }

  /**
   * Is wall
   */
  isWall() {
    return this.is(Color.Wall)
  }

  /**
   * Return flipped Color
   */
  flipped(): Color {
    if (this.is(Color.Black)) return Color.White
    if (this.is(Color.White)) return Color.Black
    return new Color(this.color)
  }

  /**
   * Flip this color
   */
  flip() {
    return this.set(this.flipped().color)
  }

  get color() {
    return this._color
  }

  static get ColorCode() {
    return ColorCode
  }

  static get Black() {
    return new Color(ColorCode.Black)
  }

  static get White() {
    return new Color(ColorCode.White)
  }

  static get Empty() {
    return new Color(ColorCode.Empty)
  }

  static get Wall() {
    return new Color(ColorCode.Wall)
  }
}

export default Color
