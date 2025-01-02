import { type Board, type Options, type Cell, Status } from '@/types/global'
import { countNeighbors, createBoard } from '@/utils/boardUtils'

export class GameOfLife
{
  private board: Board
  private width: number = 50
  private height: number = 15
  private intervalId?: Timer
  private generation: number = 0

  constructor(options?: Options)
  {
    if (options?.board)
    {
      this.board = options.board
      this.width = options.board[0].length
      this.height = options.board.length
    }

    else
    {
      if (!options?.width || !options?.height)
      {
        throw new Error('Width and height are required if no board is provided')
      }

      this.width = options.width
      this.height = options.height
      this.board = createBoard(this.width, this.height)
    }
  }

  /**
   * Generate the next generation of the board.
   */
  next(): void
  {
    this.updateBoard()
    this.generation++
  }

  /**
   * Get the current generation number.
   */
  getGeneration(): number
  {
    return this.generation
  }

  /**
   * Get the current board.
   */
  getBoard(): Board
  {
    return this.board
  }

  /**
   * Start the game loop. Default interval is 100ms.
   */
  start(ms: number = 100): void
  {
    this.intervalId = setInterval(() =>
    {
      console.clear()
      this.next()
      this.display()
    }, ms)
  }

  /**
   * Stop the game loop.
   */
  stop(): void
  {
    if (this.intervalId)
    {
      clearInterval(this.intervalId)
    }
  }

  /**
   * Display the current board.
   */
  display(): void
  {
    process.stdout.write('\x1b[H')

    for (const row of this.board)
    {
      const board = row.map((cell) => cell ? Status.Alive : Status.Dead).join('')

      process.stdout.write(board + '\n')
    }

    process.stdout.write(`Generation: ${this.generation}\n`)
  }

  private updateBoard(): void
  {
    const newBoard = this.board.map((row, y) =>
    {
      return row.map((_, x) =>
      {
        return this.updateCell(x, y)
      })
    })

    this.board = newBoard
  }

  private updateCell(x: number, y: number): Cell
  {
    const neighbors = countNeighbors(this.board, x, y)
    const live = this.board[y][x]

    if (live && (neighbors < 2 || neighbors > 3))
    {
      return false
    }

    if (!live && neighbors === 3)
    {
      return true
    }

    return live
  }
}
