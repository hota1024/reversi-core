import Vec2 from '../src/Vec2'

it('Instantiate', () => {
  let p1 = new Vec2(32, 413)
  let p2 = new Vec2({ x: 213, y: 132 })
  let p3 = new Vec2(new Vec2(432, 51))

  expect(p1.x === 32).toBeTruthy()
  expect(p1.y === 413).toBeTruthy()

  expect(p2.x === 213).toBeTruthy()
  expect(p2.y === 132).toBeTruthy()

  expect(p3.x === 432).toBeTruthy()
  expect(p3.y === 51).toBeTruthy()
})
