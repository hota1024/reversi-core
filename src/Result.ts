import Reversi from './Reversi'
import Player from './Player'
import ResultType from './ResultType'

class Result {
  private _winner: Player
  private _loser: Player
  private _black: Player
  private _white: Player
  private _isDraw: boolean

  constructor(black: Player, white: Player, type: ResultType) {
    this._black = black
    this._white = white
    this._isDraw = false

    if (type === ResultType.Draw) {
      this._isDraw = true
    } else if (type === ResultType.BlackWin) {
      this._winner = black
      this._loser = white
    } else if (type === ResultType.WhiteWin) {
      this._winner = white
      this._loser = black
    }
  }

  get winner() {
    return this._winner
  }

  get loser() {
    return this._loser
  }

  get blackWin() {
    return this._winner === this._black
  }

  get whiteWin() {
    return this._winner === this._white
  }

  get black() {
    return this._black
  }

  get white() {
    return this._white
  }

  get isDraw() {
    return this._isDraw
  }
}

export default Result
