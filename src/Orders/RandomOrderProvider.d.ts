import IOrderProvider from '../IOrderProvider';
import Turn from '../Turn';
declare class RandomOrderProvider implements IOrderProvider {
    r: boolean;
    constructor();
    getPlayer1Turn(): Turn;
    getPlayer2Turn(): Turn;
}
export default RandomOrderProvider;
