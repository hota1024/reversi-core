import Vec2 from './Vec2'
import Tile from './Tile'
import Color from './Color'
import Turn from './Turn'

class Board {
  private _tiles: Array<Tile> = []

  get width() {
    return 10
  }

  get height() {
    return 10
  }

  get tiles() {
    return this._tiles
  }

  constructor() {
    // tslint:disable
    let tileCodes = [
      3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      3, 0, 0, 0, 0, 0, 0, 0, 0, 3,
      3, 0, 0, 0, 0, 0, 0, 0, 0, 3,
      3, 0, 0, 0, 0, 0, 0, 0, 0, 3,
      3, 0, 0, 0, 1, 2, 0, 0, 0, 3,
      3, 0, 0, 0, 2, 1, 0, 0, 0, 3,
      3, 0, 0, 0, 0, 0, 0, 0, 0, 3,
      3, 0, 0, 0, 0, 0, 0, 0, 0, 3,
      3, 0, 0, 0, 0, 0, 0, 0, 0, 3,
      3, 3, 3, 3, 3, 3, 3, 3, 3, 3
    ]
    // tslint:enable

    const tileCodeColors = [Color.Empty, Color.White, Color.Black, Color.Wall]

    tileCodes.forEach(code => {
      let color: Color

      if (code === 0) color = Color.Empty
      if (code === 1) color = Color.White
      if (code === 2) color = Color.Black
      if (code === 3) color = Color.Wall

      const tile = new Tile(color)
      this._tiles.push(tile)
    })
  }

  getIndex(pos: Vec2) {
    return pos.y * this.width + pos.x
  }

  getTile(pos: Vec2) {
    return this._tiles[this.getIndex(pos)]
  }

  runAngle(pos: Vec2, angle: Vec2, turn: Turn, flip: boolean) {
    if (this.getTile(pos).isEmpty() === false) return false
    if (
      this.getTile(pos.movedBy(angle)).color.is(turn.flipped().color) === false
    ) {
      return false
    }
    if (flip) {
      if (this.runAngle(pos, angle, turn, false) === false) return false
    }

    let runPos = new Vec2(pos)

    do {
      runPos.moveBy(angle)
      let tile = this.getTile(runPos)

      if (tile.isEmpty()) return false
      if (tile.color.is(turn.color)) break
      if (flip) {
        tile.flip()
      }
    } while (this.getTile(runPos).isWhiteOrBlack())
    return this.getTile(runPos).color.is(turn.color)
  }

  run(pos: Vec2, turn: Turn, flip: boolean) {
    let result = false

    if (this.runAngle(pos, new Vec2(1, 0), turn, flip)) result = true
    if (this.runAngle(pos, new Vec2(-1, 0), turn, flip)) result = true
    if (this.runAngle(pos, new Vec2(0, 1), turn, flip)) result = true
    if (this.runAngle(pos, new Vec2(0, -1), turn, flip)) result = true
    if (this.runAngle(pos, new Vec2(1, 1), turn, flip)) result = true
    if (this.runAngle(pos, new Vec2(1, -1), turn, flip)) result = true
    if (this.runAngle(pos, new Vec2(-1, 1), turn, flip)) result = true
    if (this.runAngle(pos, new Vec2(-1, -1), turn, flip)) result = true

    if (result && flip) {
      this.getTile(pos).set(turn.color)
    }

    return result
  }

  put(pos: Vec2, turn: Turn) {
    return this.run(pos, new Turn(turn.color), true)
  }

  putablePoints(turn: Turn) {
    let points: Array<Vec2> = []

    for (let y = 0; y < this.height; ++y) {
      for (let x = 0; x < this.width; ++x) {
        if (this.run(new Vec2(x, y), turn, false)) {
          points.push(new Vec2(x, y))
        }
      }
    }

    return points
  }

  isPuttable(pos: Vec2, turn: Turn) {
    return this.run(pos, turn, false)
  }

  tileCount(color: Color) {
    let count = 0

    this._tiles.forEach(tile => {
      if (tile.color.is(color)) ++count
      // TODO: ???????????
    })

    return count
  }

  log() {
    let log = ''

    for (let y = 0; y < this.height; ++y) {
      for (let x = 0; x < this.width; ++x) {
        let tile = this.getTile(new Vec2(x, y))

        if (tile.isBlack()) log += '◝ '
        else if (tile.isWhite()) log += '○ '
        else log += (x + y) % 2 === 0 ? '■ ' : '□ '
      }
      log += '\n'
    }

    console.log(log)
  }
}

export default Board
