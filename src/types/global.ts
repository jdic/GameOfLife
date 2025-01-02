export type Cell = boolean

export enum Status
{
  Alive = '🟩',
  Dead = '⬛',
}

export type Board = Cell[][]

export interface Options
{
  width?: number
  height?: number
  board?: Board
  ms?: number
  showGeneration?: boolean
}
