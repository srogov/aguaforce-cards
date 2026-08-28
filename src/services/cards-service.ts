import { cards } from '@/data/cards'
import type { Cards } from '@/data/cards'

export type { Cards }

export type CardSortBy = 'main' | 'supporting'

export type CardFilter = {
  muscles?: string[]
}

export type GetCardsOptions = {
  filter?: CardFilter
  sortBy?: CardSortBy
}

function matchesFilter(card: Cards, filter?: CardFilter): boolean {
  if (!filter?.muscles || filter.muscles.length === 0) return true
  return [...card.muscles, ...card.muscles2].some((muscle) => filter.muscles!.includes(muscle))
}

function sortCards(list: Cards[], sortBy?: CardSortBy): Cards[] {
  if (!sortBy) return list
  const sortKey = sortBy === 'main' ? 'muscles' : 'muscles2'
  return [...list].sort((a, b) => a[sortKey].join(', ').localeCompare(b[sortKey].join(', ')))
}

export function getCards(options: GetCardsOptions = {}): Cards[] {
  const filtered = cards.filter((card) => matchesFilter(card, options.filter))
  return sortCards(filtered, options.sortBy)
}

export function getMuscleOptions(): string[] {
  return Array.from(new Set(cards.flatMap((card) => [...card.muscles, ...card.muscles2]))).sort(
    (a, b) => a.localeCompare(b),
  )
}
