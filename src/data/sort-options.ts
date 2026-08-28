import type { CardSortBy } from '@/services/cards-service'

export type SortOption = {
  name: string
  value: CardSortBy
}

export const sortOptions: SortOption[] = [
  { name: 'Main Muscles', value: 'main' },
  { name: 'Supporting Muscles', value: 'supporting' },
]
