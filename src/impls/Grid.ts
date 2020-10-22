import { GridEachCallbackFn, GridMapCallbackFn, IGrid } from '@/interfaces'
import { Point } from '@/types'

/**
 * Grid class.
 */
export class Grid<T> implements IGrid<T> {
  readonly width: number

  readonly height: number

  private readonly values: T[] = []

  /**
   * Grid constructor.
   *
   * @param width grid width.
   * @param height grid height.
   * @param value initial values.
   */
  constructor(width: number, height: number, value?: T) {
    this.width = width
    this.height = height
    if (value) {
      this.fill(value)
    }
  }

  fill(value: T): this {
    this.values.fill(value)

    return this
  }

  set(point: Point, value: T): this {
    this.values[this.getPointIndex(point)] = value

    return this
  }

  get(point: Point): T {
    return this.values[this.getPointIndex(point)]
  }

  has(value: T): boolean {
    return this.values.includes(value)
  }

  each(callback: GridEachCallbackFn<T>): void {
    for (let y = 0; y < this.height; ++y) {
      for (let x = 0; x < this.width; ++x) {
        callback(this.get({ x, y }), { x, y })
      }
    }
  }

  map<U>(callback: GridMapCallbackFn<T, U>): Grid<U> {
    const grid = new Grid<U>(this.width, this.height)

    this.each((value, point) => {
      grid.set(point, callback(value, point))
    })

    return grid
  }

  /**
   * returns array index of given point.
   *
   * @param point point.
   */
  private getPointIndex(point: Point) {
    return point.y * this.width + point.y
  }
}
