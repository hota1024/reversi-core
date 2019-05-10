import Color from '../src/Color'

it('Instantiate', () => {
  let white = new Color(Color.ColorCode.White)
  let black = new Color(Color.ColorCode.Black)
  let empty = new Color(Color.ColorCode.Empty)
  let wall = new Color(Color.ColorCode.Wall)

  expect(white.color).toBe(Color.ColorCode.White)
  expect(black.color).toBe(Color.ColorCode.Black)
  expect(empty.color).toBe(Color.ColorCode.Empty)
  expect(wall.color).toBe(Color.ColorCode.Wall)
})

it('Static generate', () => {
  let white = Color.White
  let black = Color.Black
  let empty = Color.Empty
  let wall = Color.Wall

  expect(white.color).toBe(Color.ColorCode.White)
  expect(black.color).toBe(Color.ColorCode.Black)
  expect(empty.color).toBe(Color.ColorCode.Empty)
  expect(wall.color).toBe(Color.ColorCode.Wall)
})

it('Is', () => {
  let white = Color.White
  let black = Color.Black
  let empty = Color.Empty
  let wall = Color.Wall

  expect(white.is(Color.White)).toBeTruthy()
  expect(black.is(Color.Black)).toBeTruthy()
  expect(empty.is(Color.Empty)).toBeTruthy()
  expect(wall.is(Color.Wall)).toBeTruthy()

  expect(white.is(Color.Black)).toBeFalsy()
  expect(black.is(Color.White)).toBeFalsy()
  expect(empty.is(Color.Wall)).toBeFalsy()
  expect(wall.is(Color.Empty)).toBeFalsy()
})

it('Flipped', () => {
  let white = Color.White
  let black = Color.Black
  let empty = Color.Empty
  let wall = Color.Wall
  
  expect(white.flipped().is(Color.Black)).toBeTruthy()
  expect(black.flipped().is(Color.White)).toBeTruthy()
  expect(empty.flipped().is(Color.Empty)).toBeTruthy()
  expect(wall.flipped().is(Color.Wall)).toBeTruthy()
})

it('Flip', () => {
  let white = Color.White
  let black = Color.Black
  let empty = Color.Empty
  let wall = Color.Wall

  white.flip()
  black.flip()
  empty.flip()
  wall.flip()
  
  expect(white.is(Color.Black)).toBeTruthy()
  expect(black.is(Color.White)).toBeTruthy()
  expect(empty.is(Color.Empty)).toBeTruthy()
  expect(wall.is(Color.Wall)).toBeTruthy()
})
