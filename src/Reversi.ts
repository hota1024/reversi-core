import Board from './Board'
import Player from './Player'
import Turn from './Turn'
import IOrderProvider from './IOrderProvider'
import IOutputProvider from './IOutputProvider'
import Vec2 from './Vec2'
import ErrorType from './ErrorType'
import Color from './Color'
import IJudger from './IJudger'

class Reversi {
  board: Board
  turn: Turn
  lastPut: Vec2
  hooks: Array<any>
  _isGameOver: boolean

  constructor(
    public player1: Player,
    public player2: Player,
    public order: IOrderProvider,
    public output: IOutputProvider,
    public judger: IJudger
  ) {
    this.turn = new Turn(Color.Black)
    this.board = new Board()
    this.hooks = []
    player1.setTurn(order.getPlayer1Turn())
    player2.setTurn(order.getPlayer2Turn())
    player1.setReversi(this)
    player2.setReversi(this)

    this._isGameOver = false

    this.initialize()
    if (this.turn.color.isBlack()) this.black.onMyTurn()
    if (this.turn.color.isWhite()) this.white.onMyTurn()
  }

  get black() {
    return this.player1.turn.color.isBlack() ? this.player1 : this.player2
  }

  get white() {
    return this.player1.turn.color.isWhite() ? this.player1 : this.player2
  }

  get current() {
    if (this.turn.color.isBlack()) return this.black
    if (this.turn.color.isWhite()) return this.white
  }

  initialize() {
    this.output.reversi = this as Reversi
    this.output.initialize()
    this.output.output()
  }

  /**
   * Put on pos with turn
   * @param pos Vec2
   * @param turn Turn
   */
  put(pos: Vec2, turn: Turn) {
    if (this._isGameOver) return false
    if (this.turn.color.is(turn.color) === false) {
      this.output.error(ErrorType.NotYourTurn)
      return false
    }

    this.lastPut = new Vec2(pos)
    let result = this.board.put(pos, this.turn)

    if (result) {
      this.invokeHooks('turnEnd')
      this.turn.flip()
      if (this.board.putablePoints(this.turn).length === 0) {
        this.output.error(ErrorType.Pass)
        this.turn.flip()
        if (this.board.putablePoints(this.turn).length === 0) {
          return this.gameOver()
        }
      }

      if (this.turn.color.isBlack()) this.black.onMyTurn()
      if (this.turn.color.isWhite()) this.white.onMyTurn()
    } else {
      this.output.error(ErrorType.CanNotPutHere)
    }
    this.output.output()
    return result
  }

  gameOver() {
    this._isGameOver = true
    this.output.output()
    this.output.gameOver(this.judger.getResult(this))
  }

  isGameOver() {
    this.invokeHooks('gameOver')
    return this._isGameOver
  }

  invokeHooks(name: string) {
    this.hooks.forEach(hook => {
      if (hook.name === name) {
        hook.callback()
      }
    })
  }

  onGameOver(fn: any) {
    this.hooks.push({
      name: 'gameOver',
      callback: fn
    })
  }

  onTurnEnd(fn: any) {
    this.hooks.push({
      name: 'turnEnd',
      callback: fn
    })
  }
}

export default Reversi
