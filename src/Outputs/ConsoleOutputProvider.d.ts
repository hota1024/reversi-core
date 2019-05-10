import IOutputProvider from '../IOutputProvider';
import Reversi from '../Reversi';
import ErrorType from '../ErrorType';
import Result from '../Result';
declare class ConsoleOutputProvider implements IOutputProvider {
    reversi: Reversi;
    initialize(): void;
    output(): void;
    error(error: ErrorType): void;
    gameOver(result: Result): void;
}
export default ConsoleOutputProvider;
