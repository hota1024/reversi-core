import { addPoint, clonePoint, reverseColor } from '@/helpers'
import { IBoard } from '@/interfaces'
import { Color, Point, Tile } from '@/types'
import { Grid } from './Grid'

/**
 * Board class.
 */
export class Board implements IBoard {
  readonly width: number

  readonly height: number

  /**
   * board grid.
   */
  private readonly grid: Grid<Tile>

  /**
   * Board constructor.
   *
   * @param width board width.
   * @param height board height.
   */
  constructor(width = 8, height = 8) {
    this.width = width
    this.height = height

    let grid = new Grid<Tile>(width + 2, height + 2, 'empty')

    grid = grid.map<Tile>((value, { x, y }) => {
      if (x === 0 || y === 0 || x === width + 1 || y === height + 1) {
        return 'wall'
      }

      return 'empty'
    })

    grid.set({ x: width / 2, y: height / 2 }, 'black')
    grid.set({ x: width / 2 + 1, y: height / 2 + 1 }, 'black')
    grid.set({ x: width / 2 + 1, y: height / 2 }, 'white')
    grid.set({ x: width / 2, y: height / 2 + 1 }, 'white')

    this.grid = grid
  }

  toGrid(): Grid<Tile> {
    return this.grid
  }

  put(color: Color, point: Point): boolean {
    return this.run(point, color, true)
  }

  checkPut(color: Color, point: Point): boolean {
    return this.run(point, color, false)
  }

  count(color: Color): number {
    let count = 0

    this.grid.each((value) => {
      if (value === color) {
        ++count
      }
    })

    return count
  }

  getPointsToPut(color: Color): Point[] {
    const points: Point[] = []

    this.toGrid().each((value, point) => {
      if (this.checkPut(color, point)) {
        points.push(point)
      }
    })

    return points
  }

  private runAngle(
    point: Point,
    angle: Point,
    color: Color,
    doReverse: boolean
  ): boolean {
    if (doReverse) {
      if (!this.runAngle(point, angle, color, false)) {
        return false
      }
    }

    const grid = this.toGrid()
    const reversedColor = reverseColor(color)

    if (grid.get(point) !== 'empty') {
      return false
    }

    if (grid.get(addPoint(point, angle)) !== reversedColor) {
      return false
    }

    let current = clonePoint(point)

    do {
      current = addPoint(current, angle)
      const tile = grid.get(current)

      if (tile === 'empty') {
        return false
      }

      if (tile === color) {
        break
      }

      if (doReverse) {
        grid.set(current, color)
      }
    } while (['white', 'black'].includes(grid.get(current)))

    return grid.get(current) === color
  }

  run(pos: Point, color: Color, doReverse: boolean): boolean {
    const results = [
      this.runAngle(pos, { x: 1, y: 0 }, color, doReverse),
      this.runAngle(pos, { x: -1, y: 0 }, color, doReverse),
      this.runAngle(pos, { x: 0, y: 1 }, color, doReverse),
      this.runAngle(pos, { x: 0, y: -1 }, color, doReverse),
      this.runAngle(pos, { x: 1, y: 1 }, color, doReverse),
      this.runAngle(pos, { x: 1, y: -1 }, color, doReverse),
      this.runAngle(pos, { x: -1, y: 1 }, color, doReverse),
      this.runAngle(pos, { x: -1, y: -1 }, color, doReverse),
    ]
    const result = results.includes(true)

    if (result && doReverse) {
      this.grid.set(pos, color)
    }

    return result
  }
}
