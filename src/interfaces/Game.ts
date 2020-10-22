import { Color } from '@/types'
import { IBoard } from './Board'

/**
 * Game#onTurn's callback function type.
 */
export type GameOnTurnCallbackFn = () => Promise<void>

/**
 * Game#onFinish's callback function type.
 */
export type GameOnFinishCallbackFn = (winner: Color) => Promise<void>

/**
 * Game#onPass's callback function type.
 */
export type GameOnPassCallbackFn = (turn: Color) => Promise<void>

/**
 * Game interface.
 */
export interface IGame {
  /**
   * board of game.
   */
  readonly board: IBoard

  /**
   * returns current color of turn.
   */
  turn(): Color

  /**
   * forward turn to next.
   */
  next(): this

  /**
   * call given callback at begining of each turn.
   *
   * @param callback callback function.
   */
  onTurn(callback: GameOnTurnCallbackFn): this

  /**
   * call given callback at game finish.
   *
   * @param callback callback function.
   */
  onFinish(callback: GameOnFinishCallbackFn): this

  /**
   * call given function at pass turn.
   *
   * @param callback callback function.
   */
  onPass(callback: GameOnPassCallbackFn): this
}
