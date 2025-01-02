class GameOfLife
{
  board: boolean[][]

  constructor(width: number, height: number)
  {
    this.board = Array(height).fill(0).map(() => Array(width).fill(false))
  }

  initialize()
  {
    for (let y = 0; y < this.board.length; y++)
    {
      for (let x = 0; x < this.board[y].length; x++)
      {
        this.board[y][x] = Math.random() < 0.5
      }
    }
  }

  updateBoard()
  {
    const newBoard = this.board.map((row, y) => row.map((cell, x) => this.updateCell(x, y)))
    this.board = newBoard
  }

  updateCell(x: number, y: number)
  {
    const neighbors = this.countNeighbors(x, y)
    const live = this.board[x][y]

    if (live && (neighbors < 2 || neighbors > 3)) return false
    if (!live && neighbors === 3) return true

    return live
  }

  countNeighbors(x: number, y: number)
  {
    let count = 0

    for (let dx = -1; dx <= 1; dx++)
    {
      for (let dy = -1; dy <= 1; dy++)
      {
        if (dx === 0 && dy === 0) continue

        const nx = x + dx
        const ny = y + dy

        if (nx >= 0 && ny >= 0 && ny < this.board.length && nx < this.board[0].length && this.board[ny][nx]) count++
      }
    }

    return count
  }

  printBoard()
  {
    for (const row of this.board) console.log(row.map((cell) => cell ? '🟩' : '⬛').join(''))
  }
}

;(async () =>
{
  const [width, height] = process.argv.map((item) => item.match(/\d+/g)).filter(Boolean).map(Number)
  const game = new GameOfLife(width ?? 30, height ?? 30)
  game.initialize()

  while (true)
  {
    console.clear()
    game.updateBoard()
    game.printBoard()

    await new Promise((resolve) => setTimeout(resolve, 100))
  }
})()
