import Turn from './Turn';
interface IOrderProvider {
    getPlayer1Turn(): Turn;
    getPlayer2Turn(): Turn;
}
export default IOrderProvider;
