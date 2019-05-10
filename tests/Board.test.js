import Board from '../src/Board';
import Turn from '../src/Turn';
import Color from '../src/Color';
import Vec2 from '../src/Vec2';
it('Put', function () {
    var board = new Board();
    var result = board.put(new Vec2(3, 4), new Turn(Color.Black));
    expect(result).toBeTruthy();
    expect(board.getTile(new Vec2(3, 4)).color.is(Color.Black)).toBeTruthy();
    expect(board.getTile(new Vec2(4, 4)).color.is(Color.Black)).toBeTruthy();
});
