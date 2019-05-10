import Reversi from './Reversi';
import Board from './Board';
import Player from './Player';
import Turn from './Turn';
import Vec2 from './Vec2';
import ErrorType from './ErrorType';
import Color from './Color';
import RandomOrderProvider from './Orders/RandomOrderProvider';
import Player1FirstOrderProvider from './Orders/Player1FirstOrderProvider';
import Player2FirstOrderProvider from './Orders/Player2FirstOrderProvider';
import ConsoleOutputProvider from './Outputs/ConsoleOutputProvider';
import ProgramPlayer from './Players/ProgramPlayer';
import TileCountJudger from './Judgers/TileCountJudger';
var ReversiCore = {
    Reversi: Reversi,
    Board: Board,
    Player: Player,
    Turn: Turn,
    Vec2: Vec2,
    ErrorType: ErrorType,
    Color: Color,
    Orders: {
        RandomOrderProvider: RandomOrderProvider,
        Player1FirstOrderProvider: Player1FirstOrderProvider,
        Player2FirstOrderProvider: Player2FirstOrderProvider
    },
    Outputs: {
        ConsoleOutputProvider: ConsoleOutputProvider
    },
    Players: {
        ProgramPlayer: ProgramPlayer
    },
    Judgers: {
        TileCountJudger: TileCountJudger
    }
};
window.ReversiCore = ReversiCore;
export default ReversiCore;
