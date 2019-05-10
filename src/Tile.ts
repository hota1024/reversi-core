import Color from './Color'

class Tile {
  private _color: Color

  constructor(color: Color) {
    this.set(color)
  }

  get color() {
    return this._color
  }

  /**
   * Set with color
   * @param color Color
   */
  set(color: Color) {
    this._color = new Color(color.color)
  }

  /**
   * Return flipped tile
   */
  flipped() {
    return new Tile(this._color.flipped())
  }

  /**
   * Flip tile
   */
  flip() {
    this._color.flip()
    return this
  }

  /**
   * Is black
   */
  isBlack() {
    return this._color.is(Color.Black)
  }

  /**
   * Is white
   */
  isWhite() {
    return this._color.is(Color.White)
  }

  /**
   * Is white or black
   */
  isWhiteOrBlack() {
    return this.isWhite() || this.isBlack()
  }

  /**
   * Is empty
   */
  isEmpty() {
    return this._color.is(Color.Empty)
  }

  /**
   * Is wall
   */
  isWall() {
    return this._color.is(Color.Wall)
  }
}

export default Tile
