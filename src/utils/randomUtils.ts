import type { Cell } from '@/types/global'

export const getRandomBoolean = (): Cell =>
{
  return Math.random() < 0.5
}
