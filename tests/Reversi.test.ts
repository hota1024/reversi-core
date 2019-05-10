import Reversi from '../src/Reversi'
import ProgramPlayer from '../src/Players/ProgramPlayer'
import RandomOrderProvider from '../src/Orders/RandomOrderProvider'
import ConsoleOutputProvider from '../src/Outputs/ConsoleOutputProvider'
import TileCountJudger from '../src/Judgers/TileCountJudger'

it('Instantiate', () => {
  let player1 = new ProgramPlayer()
  let player2 = new ProgramPlayer()
  let reversi = new Reversi(player1, player2, new RandomOrderProvider, new ConsoleOutputProvider, new TileCountJudger)

  player1.put(3, 4)
})
