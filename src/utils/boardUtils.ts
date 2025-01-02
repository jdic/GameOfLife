import { getRandomBoolean } from './randomUtils'
import type { Board } from '@/types/global'

export const createBoard = (width: number, height: number): Board =>
{
  return Array(height).fill(0).map(() =>
  {
    return Array(width).fill(0).map(() =>
    {
      return getRandomBoolean()
    })
  })
}

export const countNeighbors = (board: Board, x: number, y: number): number =>
{
  let count = 0

  for (let dx = -1; dx <= 1; dx++)
  {
    for (let dy = -1; dy <= 1; dy++)
    {
      if (dx === 0 && dy === 0)
      {
        continue
      }

      const nx = x + dx
      const ny = y + dy

      if (nx >= 0 && ny >= 0 && ny < board.length && nx < board[0].length && board[ny][nx])
      {
        count++
      }
    }
  }

  return count
}
