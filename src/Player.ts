import Turn from './Turn'
import Vec2 from './Vec2'
import Reversi from './Reversi'

abstract class Player {
  protected _turn: Turn
  protected _reversi: Reversi

  /**
   * Turn of player
   */
  get turn() {
    return this._turn
  }

  /**
   * Reversi of playing
   */
  get reversi() {
    return this._reversi
  }

  /**
   * Set this player
   * @param turn Turn
   */
  set(turn: Turn) {
    this.setTurn(turn)
  }

  /**
   * Set turn
   * @param turn Turn
   */
  setTurn(turn: Turn) {
    this._turn = turn
  }

  /**
   * Set reversi
   * @param reversi Reversi
   */
  setReversi(reversi: Reversi) {
    this._reversi = reversi
  }

  /**
   * Send put position with turn
   * @param pos Vec2
   */
  send(pos: Vec2) {
    return this._reversi.put(pos, this._turn)
  }

  /**
   * Compare turn and game turn
   */
  isMyTurn() {
    return this._reversi.turn.color.is(this.turn.color)
  }

  /**
   * Count tile with turn color
   */
  getTileCount() {
    return this._reversi.board.tileCount(this.turn.color)
  }

  onMyTurn() {}
}

export default Player
