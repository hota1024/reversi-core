import IJudger from '@/IJudger'
import Result from '@/Result'
import Reversi from '@/Reversi'
import ResultType from '@/ResultType'

class TileCountJudger implements IJudger {
  getResult(reversi: Reversi) {
    const blackCount = reversi.black.getTileCount()
    const whiteCount = reversi.white.getTileCount()
    let resultType: ResultType

    if (blackCount === whiteCount) {
      resultType = ResultType.Draw
    } else if (blackCount > whiteCount) {
      resultType = ResultType.BlackWin
    } else if (blackCount < whiteCount) {
      resultType = ResultType.WhiteWin
    }

    return new Result(reversi.black, reversi.white, resultType)
  }
}

export default TileCountJudger
