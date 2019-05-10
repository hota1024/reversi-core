import IOrderProvider from '../IOrderProvider';
import Turn from '../Turn';
declare class Player2FirstOrderProvider implements IOrderProvider {
    getPlayer1Turn(): Turn;
    getPlayer2Turn(): Turn;
}
export default Player2FirstOrderProvider;
