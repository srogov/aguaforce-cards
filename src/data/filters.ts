import { cards } from './cards'

export const muscleOptions: string[] = Array.from(
  new Set(cards.flatMap((card) => [...card.muscles, ...card.muscles2])),
).sort((a, b) => a.localeCompare(b))
