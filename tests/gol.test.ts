import { GameOfLife, type Board } from '../src'

describe('GameOfLife', () =>
{
  it('should create a new game with a 4x10 board', () =>
  {
    const game = new GameOfLife({ width: 4, height: 10 })

    expect(game).toBeInstanceOf(GameOfLife)
    expect(game.height).toBe(10)
    expect(game.width).toBe(4)
  })

  it('should create a new game with a custom board', () =>
  {
    const board: Board =
    [
      [false, true, false],
      [true, false, true],
      [false, true, false],
    ]

    const game = new GameOfLife({ board })

    expect(game).toBeInstanceOf(GameOfLife)
    expect(game.getBoard()).toEqual(board)
  })

  it('should update the board to the next generation', () =>
  {
    const board: Board =
    [
      [true, true, false],
      [true, false, true],
      [false, false, false],
    ]

    const game = new GameOfLife({ board })

    game.next()

    expect(game.getBoard()).not.toEqual(board)
  })

  it('should return the current generation number', () =>
  {
    const game = new GameOfLife({ width: 4, height: 10 })

    game.next()
    game.next()
    game.next()

    expect(game.getGeneration()).toBe(3)
  })
})
