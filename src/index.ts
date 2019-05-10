import Reversi from './Reversi'
import Board from './Board'
import Player from './Player'
import Turn from './Turn'
import IOrderProvider from './IOrderProvider'
import IOutputProvider from './IOutputProvider'
import Vec2 from './Vec2'
import ErrorType from './ErrorType'
import Color from './Color'
import RandomOrderProvider from './Orders/RandomOrderProvider'
import Player1FirstOrderProvider from './Orders/Player1FirstOrderProvider'
import Player2FirstOrderProvider from './Orders/Player2FirstOrderProvider'
import ConsoleOutputProvider from './Outputs/ConsoleOutputProvider'
import ProgramPlayer from './Players/ProgramPlayer'
import TileCountJudger from './Judgers/TileCountJudger'

const ReversiCore = {
  Reversi,
  Board,
  Player,
  Turn,
  Vec2,
  ErrorType,
  Color,
  Orders: {
    RandomOrderProvider,
    Player1FirstOrderProvider,
    Player2FirstOrderProvider
  },
  Outputs: {
    ConsoleOutputProvider
  },
  Players: {
    ProgramPlayer
  },
  Judgers: {
    TileCountJudger
  }
}

// interface Window {
//   ReversiCore: Object
// }

// declare let window: Window
// if (window) {
//   window.ReversiCore = ReversiCore
// }

export default ReversiCore
