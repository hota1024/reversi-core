import IOrderProvider from '../IOrderProvider'
import Turn from '../Turn'
import Color from '../Color'

class RandomOrderProvider implements IOrderProvider {
  r: boolean

  constructor() {
    this.r = Math.floor(Math.random() * 2) === 0
  }

  getPlayer1Turn() {
    return this.r ? new Turn(Color.Black) : new Turn(Color.White)
  }

  getPlayer2Turn() {
    return this.r ? new Turn(Color.White) : new Turn(Color.Black)
  }
}

export default RandomOrderProvider
