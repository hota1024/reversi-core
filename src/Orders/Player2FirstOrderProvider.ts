import IOrderProvider from '../IOrderProvider'
import Turn from '@/Turn'
import Color from '@/Color'

class Player2FirstOrderProvider implements IOrderProvider {
  getPlayer1Turn() {
    return new Turn(Color.White)
  }

  getPlayer2Turn() {
    return new Turn(Color.Black)
  }
}

export default Player2FirstOrderProvider
