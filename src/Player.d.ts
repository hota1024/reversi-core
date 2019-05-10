import Turn from './Turn';
import Vec2 from './Vec2';
import Reversi from './Reversi';
declare abstract class Player {
    protected _turn: Turn;
    protected _reversi: Reversi;
    /**
     * Turn of player
     */
    readonly turn: Turn;
    /**
     * Reversi of playing
     */
    readonly reversi: Reversi;
    /**
     * Set this player
     * @param turn Turn
     */
    set(turn: Turn): void;
    /**
     * Set turn
     * @param turn Turn
     */
    setTurn(turn: Turn): void;
    /**
     * Set reversi
     * @param reversi Reversi
     */
    setReversi(reversi: Reversi): void;
    /**
     * Send put position with turn
     * @param pos Vec2
     */
    send(pos: Vec2): boolean | void;
    /**
     * Compare turn and game turn
     */
    isMyTurn(): boolean;
    /**
     * Count tile with turn color
     */
    getTileCount(): number;
    onMyTurn(): void;
}
export default Player;
