export type SortValue = 'main' | 'supporting'

export type SortOption = {
  name: string
  value: SortValue
}

export const sortOptions: SortOption[] = [
  { name: 'Main Muscles', value: 'main' },
  { name: 'Supporting Muscles', value: 'supporting' },
]
