import IJudger from '../IJudger';
import Result from '../Result';
import Reversi from '../Reversi';
declare class TileCountJudger implements IJudger {
    getResult(reversi: Reversi): Result;
}
export default TileCountJudger;
