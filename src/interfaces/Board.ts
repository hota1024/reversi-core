import { Color, Point, Tile } from '@/types'
import { IGrid } from './Grid'

/**
 * Board interface.
 */
export interface IBoard {
  /**
   * returns a board as a grid.
   */
  toGrid(): IGrid<Tile>

  /**
   * put a tile of given color and flip board tiles by reversi rules.
   *
   * @param color color to put.
   * @param point point to put.
   */
  put(color: Color, point: Point): this

  /**
   * count tiles of gibven color.
   *
   * @param color color of tile to count.
   */
  count(color: Color): number

  /**
   * returns point array of points to put the tile of given color.
   *
   * @param color color of tile to put.
   */
  getPointsToPut(color: Color): Point[]
}
