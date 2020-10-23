import { Point } from '@/types'

/**
 * add given points.
 */
export const addPoint = (p0: Point, p1: Point): Point => {
  return {
    x: p0.x + p1.x,
    y: p0.y + p1.y,
  }
}
