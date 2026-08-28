import { cards } from '@/data/cards'
import type { Cards } from '@/data/cards'

export type { Cards }

export type CardSortBy = 'main' | 'supporting'

export type CardFilter = {
  muscles?: string[]
  targetAreas?: string[]
}

export type GetCardsOptions = {
  filter?: CardFilter
  sortBy?: CardSortBy
}

const TARGET_AREAS = ['Arms', 'Back', 'Chest', 'Core/Abs', 'Glutes/Booty', 'Legs', 'Shoulders'] as const

export type TargetArea = (typeof TARGET_AREAS)[number]

const MUSCLE_TO_TARGET_AREA: Record<string, TargetArea> = {
  Abs: 'Core/Abs',
  Adductors: 'Legs',
  Arms: 'Arms',
  Back: 'Back',
  Biceps: 'Arms',
  Brachialis: 'Arms',
  Brachioradialis: 'Arms',
  Calves: 'Legs',
  Chest: 'Chest',
  'Forearm Flexors': 'Arms',
  Forearms: 'Arms',
  Glutes: 'Glutes/Booty',
  Hamstrings: 'Legs',
  'Hip Flexors': 'Legs',
  Iliopsoas: 'Legs',
  'Lateral Deltoid': 'Shoulders',
  Lats: 'Back',
  'Lower Back': 'Back',
  'Lower Traps': 'Back',
  'Middle Back': 'Back',
  Obliques: 'Core/Abs',
  Quadriceps: 'Legs',
  Quads: 'Legs',
  'Serratus Anterior': 'Back',
  Shoulders: 'Shoulders',
  Trapezius: 'Back',
  Triceps: 'Arms',
  'Upper Back': 'Back',
}

function getCardTargetAreas(card: Cards): TargetArea[] {
  const areas = new Set<TargetArea>()
  for (const muscle of [...card.muscles, ...card.muscles2]) {
    const area = MUSCLE_TO_TARGET_AREA[muscle]
    if (area) areas.add(area)
  }
  return Array.from(areas)
}

function matchesFilter(card: Cards, filter?: CardFilter): boolean {
  if (filter?.muscles && filter.muscles.length > 0) {
    const matchesMuscles = [...card.muscles, ...card.muscles2].some((muscle) => filter.muscles!.includes(muscle))
    if (!matchesMuscles) return false
  }
  if (filter?.targetAreas && filter.targetAreas.length > 0) {
    const matchesTargetAreas = getCardTargetAreas(card).some((area) => filter.targetAreas!.includes(area))
    if (!matchesTargetAreas) return false
  }
  return true
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

export function getCardById(id: string): Cards | undefined {
  return cards.find((card) => card.id === id)
}

export function getCardImageDownloadName(card: Cards): string {
  const extension = card.imageSrc.slice(card.imageSrc.lastIndexOf('.'))
  return `aguaforce-${card.slug}${extension}`
}

export function getMuscleOptions(targetAreas?: string[]): string[] {
  const allMuscles = Array.from(new Set(cards.flatMap((card) => [...card.muscles, ...card.muscles2])))
  const filtered =
    targetAreas && targetAreas.length > 0
      ? allMuscles.filter((muscle) => targetAreas.includes(MUSCLE_TO_TARGET_AREA[muscle]))
      : allMuscles
  return filtered.sort((a, b) => a.localeCompare(b))
}

export function getTargetAreaOptions(): TargetArea[] {
  return [...TARGET_AREAS]
}
