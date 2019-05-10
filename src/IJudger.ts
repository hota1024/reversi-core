import Reversi from './Reversi'
import Result from './Result'

interface IJudger {
  getResult(reversi: Reversi): Result
}

export default IJudger
