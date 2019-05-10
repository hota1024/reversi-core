import IOutputProvider from '@/IOutputProvider'
import Reversi from '../Reversi'
import ErrorType from '../ErrorType'
import Result from '@/Result'

class ConsoleOutputProvider implements IOutputProvider {
  reversi: Reversi

  initialize() {}

  output() {
    this.reversi.board.log()
  }

  error(error: ErrorType) {
    console.log(`Can not put ${this.reversi.lastPut.toString()}.`)
  }

  gameOver(result: Result) {
    let text = 'GameOver\nResult:'

    if (result.isDraw) {
      text += 'Draw'
    } else if (result.blackWin) {
      text += 'Black Win'
    } else if (result.whiteWin) {
      text += 'White Win'
    }
    text += '\n'

    text += `Black: ${result.black.getTileCount()}\n`
    text += `White: ${result.white.getTileCount()}\n`

    console.log(text)
  }
}

export default ConsoleOutputProvider
