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
declare const ReversiCore: {
    Reversi: typeof Reversi;
    Board: typeof Board;
    Player: typeof Player;
    Turn: typeof Turn;
    Vec2: typeof Vec2;
    ErrorType: typeof ErrorType;
    Color: typeof Color;
    Orders: {
        RandomOrderProvider: typeof RandomOrderProvider;
        Player1FirstOrderProvider: typeof Player1FirstOrderProvider;
        Player2FirstOrderProvider: typeof Player2FirstOrderProvider;
    };
    Outputs: {
        ConsoleOutputProvider: typeof ConsoleOutputProvider;
    };
    Players: {
        ProgramPlayer: typeof ProgramPlayer;
    };
    Judgers: {
        TileCountJudger: typeof TileCountJudger;
    };
};
export default ReversiCore;
