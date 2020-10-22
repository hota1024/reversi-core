import { Point } from '@/types'

/**
 * Grid#each's callback function type.
 */
export type GridEachCallbackFn<T> = (value: T, point: Point) => void

/**
 * Grid#map's callback function type.
 */
export type GridMapCallbackFn<T, U> = (value: T, point: Point) => void

/**
 * Grid interface.
 */
export interface IGrid<T> {
  /**
   * grid width.
   */
  readonly width: number

  /**
   * grid height.
   */
  readonly height: number

  /**
   * fill by given value.
   *
   * @param value value to fill.
   */
  fill(value: T): this

  /**
   * set given value to given point.
   *
   * @param point point to set.
   * @param value valeu to set.
   */
  set(point: Point, value: T): this

  /**
   * returns value at given point.
   *
   * @param point point to get.
   */
  get(point: Point): T

  /**
   * returns whether grid has a given value.
   *
   * @param value value.
   */
  has(value: T): boolean

  /**
   * call given callback for each values.
   *
   * @param callback callback function.
   */
  each(callback: GridEachCallbackFn<T>): void

  /**
   * returns new grid object by return value of given callback.
   *
   * @param callback callback function.
   */
  map<U>(callback: GridMapCallbackFn<T, U>): IGrid<U>
}
