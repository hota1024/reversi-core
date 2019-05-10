import Player from '../Player'
import Vec2 from '@/Vec2'

class ProgramPlayer extends Player {
  put(x: number, y: number) {
    this.send(new Vec2(x, y))
  }
}

export default ProgramPlayer
