import { Color } from '@/types'

/**
 * reverse given color.
 */
export const reverseColor = (color: Color): Color => {
  if (color === 'black') {
    return 'white'
  }

  return 'black'
}
