import { reverseColor } from '@/helpers'
import {
  GameOnFinishCallbackFn,
  GameOnPassCallbackFn,
  GameOnTurnCallbackFn,
  GameResult,
  IGame,
} from '@/interfaces'
import { Color } from '@/types'
import { Board } from './Board'

/**
 * Game class.
 */
export class Game implements IGame {
  readonly board: Board = new Board()

  /**
   * current turn.
   */
  private currentTurn: Color = 'black'

  /**
   * onTurn's callbacks.
   */
  private readonly onTurnCallbacks: GameOnTurnCallbackFn[] = []

  /**
   * onFinish's callbacks.
   */
  private readonly onFinishCallbacks: GameOnFinishCallbackFn[] = []

  /**
   * onPass's callbacks.
   */
  private readonly onPassCallbacks: GameOnPassCallbackFn[] = []

  isFinished(): boolean {
    return (
      this.board.getPointsToPut('black').length === 0 &&
      this.board.getPointsToPut('white').length === 0
    )
  }

  turn(): Color {
    return this.currentTurn
  }

  next(): this {
    if (this.isFinished()) {
      this.callOnFinishCallbacks()

      return this
    }

    const nextTurn = reverseColor(this.currentTurn)
    if (this.board.getPointsToPut(nextTurn).length === 0) {
      this.callOnPassCallbacks()

      if (this.isFinished()) {
        this.callOnFinishCallbacks()

        return this
      }

      this.callOnTurnCallbacks()

      return this
    }

    this.currentTurn = nextTurn
    this.callOnTurnCallbacks()

    return this
  }

  onTurn(callback: GameOnTurnCallbackFn): this {
    this.onTurnCallbacks.push(callback)

    return this
  }

  onFinish(callback: GameOnFinishCallbackFn): this {
    this.onFinishCallbacks.push(callback)

    return this
  }

  onPass(callback: GameOnPassCallbackFn): this {
    this.onPassCallbacks.push(callback)

    return this
  }

  start(): this {
    this.startLoop()

    return this
  }

  /**
   * start game loop
   */
  private async startLoop(): Promise<void> {
    await this.callOnTurnCallbacks()
  }

  private async callOnTurnCallbacks(): Promise<void> {
    const turn = this.currentTurn

    for (const callback of this.onTurnCallbacks) {
      await callback()

      if (this.isFinished() || turn !== this.currentTurn) {
        break
      }
    }
  }

  private async callOnFinishCallbacks(): Promise<void> {
    if (!this.isFinished()) {
      return
    }

    const result = this.getResult()

    for (const callback of this.onFinishCallbacks) {
      await callback(result)
    }
  }

  private async callOnPassCallbacks(): Promise<void> {
    for (const callback of this.onPassCallbacks) {
      await callback(this.currentTurn)

      if (this.isFinished()) {
        break
      }
    }
  }

  private getResult(): GameResult {
    const black = this.board.count('black')
    const white = this.board.count('white')

    if (black > white) {
      return 'black'
    }

    if (white > black) {
      return 'white'
    }

    return 'draw'
  }
}
