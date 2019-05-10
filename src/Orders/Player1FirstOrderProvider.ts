import IOrderProvider from '../IOrderProvider'
import Turn from '../Turn'
import Color from '../Color'

class Player1FirstOrderProvider implements IOrderProvider {
  getPlayer1Turn() {
    return new Turn(Color.Black)
  }

  getPlayer2Turn() {
    return new Turn(Color.White)
  }
}

export default Player1FirstOrderProvider
