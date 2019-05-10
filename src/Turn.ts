import Color from './Color'

class Turn {
  private _color: Color

  constructor(color: Color) {
    this.set(color)
  }

  set(color: Color) {
    this._color = color
  }

  flipped() {
    return new Turn(this._color.flipped())
  }

  flip() {
    this._color.flip()
    return this
  }

  get color() {
    return this._color
  }
}

export default Turn
