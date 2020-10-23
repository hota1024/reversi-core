import { Point } from '@/types'

/**
 * clone given point.
 */
export const clonePoint = (point: Point): Point => {
  return {
    x: point.x,
    y: point.y,
  }
}
