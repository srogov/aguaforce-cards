'use client'

import { useMemo, useState, useSyncExternalStore } from 'react'
import Image from 'next/image'
import bannerImage from '@/images/banners/banner-5.png'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { RemovableBadge } from '@/components/badge'
import { LikeIconButton } from '@/components/like-button'
import { CardDetailsDrawer } from '@/components/card-details-drawer'
import { Container } from '@/components/container'
import { getCards, getMuscleOptions, getTargetAreaOptions } from '@/services/cards-service'
import type { Cards } from '@/services/cards-service'
import { getLikedCardIds, subscribeToLikedCardIds } from '@/services/likes-service'
import { parseSteps } from '@/lib/steps'
import { LINKS } from '@/config'

const TARGET_AREAS_PARAM = 'target-muscle-groups'
const MUSCLES_PARAM = 'muscles'

function parseListParam(searchParams: URLSearchParams, key: string): string[] {
  const raw = searchParams.get(key)
  if (!raw) return []
  return raw.split(',').filter(Boolean)
}

function getServerLikedCardIdsKey() {
  return ''
}

export function ExerciseCatalog({
  children,
  onlyLiked = false,
  layout = 'grid',
}: {
  children?: React.ReactNode
  onlyLiked?: boolean
  layout?: 'grid' | 'list'
} = {}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null)

  const targetAreaOptions: string[] = useMemo(() => getTargetAreaOptions(), [])

  const selectedTargetAreas = useMemo(() => {
    const raw = parseListParam(searchParams, TARGET_AREAS_PARAM)
    return raw.filter((targetArea) => targetAreaOptions.includes(targetArea))
  }, [searchParams, targetAreaOptions])

  const muscleOptions = useMemo(() => getMuscleOptions(selectedTargetAreas), [selectedTargetAreas])

  const rawSelectedMuscles = useMemo(() => parseListParam(searchParams, MUSCLES_PARAM), [searchParams])

  const selectedMuscles = useMemo(
    () => rawSelectedMuscles.filter((muscle) => muscleOptions.includes(muscle)),
    [rawSelectedMuscles, muscleOptions],
  )

  function updateListParam(key: string, values: string[]) {
    const params = new URLSearchParams(searchParams.toString())
    if (values.length > 0) {
      params.set(key, values.join(','))
    } else {
      params.delete(key)
    }
    const query = params.toString()
    window.history.replaceState(null, '', query ? `${pathname}?${query}` : pathname)
  }

  function toggleMuscle(muscle: string) {
    const next = rawSelectedMuscles.includes(muscle)
      ? rawSelectedMuscles.filter((m) => m !== muscle)
      : [...rawSelectedMuscles, muscle]
    updateListParam(MUSCLES_PARAM, next)
  }

  function toggleTargetArea(targetArea: string) {
    const next = selectedTargetAreas.includes(targetArea)
      ? selectedTargetAreas.filter((a) => a !== targetArea)
      : [...selectedTargetAreas, targetArea]
    updateListParam(TARGET_AREAS_PARAM, next)
  }

  const likedCardIdsKey = useSyncExternalStore(
    subscribeToLikedCardIds,
    () => getLikedCardIds().join(','),
    getServerLikedCardIdsKey,
  )
  const likedCardIds = useMemo(
    () => (likedCardIdsKey ? likedCardIdsKey.split(',') : []),
    [likedCardIdsKey],
  )

  const allMatchingCards = useMemo(
    () => getCards({ filter: { muscles: selectedMuscles, targetAreas: selectedTargetAreas } }),
    [selectedMuscles, selectedTargetAreas],
  )

  const visibleCards = useMemo(() => {
    if (!onlyLiked) return allMatchingCards
    const matchingById = new Map(allMatchingCards.map((card) => [card.id, card]))
    return likedCardIds
      .map((id) => matchingById.get(id))
      .filter((card): card is Cards => card !== undefined)
  }, [allMatchingCards, onlyLiked, likedCardIds])

  const totalCardsCount = useMemo(
    () => (onlyLiked ? likedCardIds.length : getCards().length),
    [onlyLiked, likedCardIds],
  )

  return (
    <div className="bg-gray-50">
      {/* Mobile filter dialog */}
      <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 sm:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
          >
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="relative -mr-2 flex size-10 cursor-pointer items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Filters */}
            <form className="mt-4">
              <Disclosure as="div" defaultOpen className="border-t border-gray-200 px-4 py-6">
                <h3 className="font-medium text-gray-900">
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
                    <span className="font-medium text-gray-900">Target Muscle Groups</span>
                    <span className="ml-6 flex items-center">
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 rotate-0 transform group-data-open:-rotate-180"
                      />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel className="pt-6">
                  <div className="space-y-6">
                    {targetAreaOptions.map((targetArea, optionIdx) => (
                      <div key={targetArea} className="flex gap-3">
                        <div className="flex h-5 shrink-0 items-center">
                          <div className="group grid size-4 grid-cols-1">
                            <input
                              checked={selectedTargetAreas.includes(targetArea)}
                              onChange={() => toggleTargetArea(targetArea)}
                              id={`filter-mobile-target-area-${optionIdx}`}
                              name="target-area[]"
                              type="checkbox"
                              className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                            />
                            <svg
                              fill="none"
                              viewBox="0 0 14 14"
                              className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                            >
                              <path
                                d="M3 8L6 11L11 3.5"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="opacity-0 group-has-checked:opacity-100"
                              />
                              <path
                                d="M3 7H11"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="opacity-0 group-has-indeterminate:opacity-100"
                              />
                            </svg>
                          </div>
                        </div>
                        <label
                          htmlFor={`filter-mobile-target-area-${optionIdx}`}
                          className="ml-3 text-sm text-gray-500"
                        >
                          {targetArea}
                        </label>
                      </div>
                    ))}
                  </div>
                </DisclosurePanel>
              </Disclosure>

              {/* Target Muscles filter hidden from UI, keep logic intact */}
              {false && (
                <Disclosure as="div" defaultOpen className="border-t border-gray-200 px-4 py-6">
                  <h3 className="font-medium text-gray-900">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
                      <span className="font-medium text-gray-900">Target Muscles</span>
                      <span className="ml-6 flex items-center">
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="size-5 rotate-0 transform group-data-open:-rotate-180"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-6">
                      {muscleOptions.map((muscle, optionIdx) => (
                        <div key={muscle} className="flex gap-3">
                          <div className="flex h-5 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                              <input
                                checked={selectedMuscles.includes(muscle)}
                                onChange={() => toggleMuscle(muscle)}
                                id={`filter-mobile-muscles-${optionIdx}`}
                                name="muscles[]"
                                type="checkbox"
                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                              />
                              <svg
                                fill="none"
                                viewBox="0 0 14 14"
                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                              >
                                <path
                                  d="M3 8L6 11L11 3.5"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-checked:opacity-100"
                                />
                                <path
                                  d="M3 7H11"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                />
                              </svg>
                            </div>
                          </div>
                          <label htmlFor={`filter-mobile-muscles-${optionIdx}`} className="ml-3 text-sm text-gray-500">
                            {muscle}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              )}
            </form>
          </DialogPanel>
        </div>
      </Dialog>

      <main>
        <Container>
          {children}

           {(selectedTargetAreas.length > 0 || selectedMuscles.length > 0) && (
            <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
              {selectedTargetAreas.map((targetArea) => (
                <RemovableBadge
                  key={`target-area-${targetArea}`}
                  color="gray"
                  onRemove={() => toggleTargetArea(targetArea)}
                >
                  {targetArea}
                </RemovableBadge>
              ))}
              {selectedMuscles.map((muscle) => (
                <RemovableBadge key={`muscle-${muscle}`} color="blue" onRemove={() => toggleMuscle(muscle)}>
                  {muscle}
                </RemovableBadge>
              ))}
            </div>
          )}

          {/* Filters */}
          <section aria-labelledby="filter-heading" className="border-t border-gray-200 pt-6">
            <h2 id="filter-heading" className="sr-only">
              Product filters
            </h2>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 tabular-nums">
                {visibleCards.length} of {totalCardsCount}
              </span>

              {/* Mobile filter button hidden from UI, keep logic intact */}
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="hidden cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Filters
              </button>

              <div className="flex items-center gap-4">
                <Popover className="relative inline-block text-left">
                  <PopoverButton className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    <span>Target Muscle Groups</span>
                    {selectedTargetAreas.length > 0 ? (
                      <span className="ml-1.5 rounded-sm bg-gray-200 px-1.5 py-0.5 text-xs font-semibold text-gray-700 tabular-nums">
                        {selectedTargetAreas.length}
                      </span>
                    ) : null}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </PopoverButton>

                  <PopoverPanel
                    transition
                    className="absolute right-0 z-20 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <form className="space-y-4">
                      {targetAreaOptions.map((targetArea, optionIdx) => (
                        <div key={targetArea} className="flex gap-3">
                          <div className="flex h-5 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                              <input
                                checked={selectedTargetAreas.includes(targetArea)}
                                onChange={() => toggleTargetArea(targetArea)}
                                id={`filter-target-area-${optionIdx}`}
                                name="target-area[]"
                                type="checkbox"
                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                              />
                              <svg
                                fill="none"
                                viewBox="0 0 14 14"
                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                              >
                                <path
                                  d="M3 8L6 11L11 3.5"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-checked:opacity-100"
                                />
                                <path
                                  d="M3 7H11"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                />
                              </svg>
                            </div>
                          </div>
                          <label
                            htmlFor={`filter-target-area-${optionIdx}`}
                            className="pr-6 text-sm font-medium whitespace-nowrap text-gray-900"
                          >
                            {targetArea}
                          </label>
                        </div>
                      ))}
                    </form>
                  </PopoverPanel>
                </Popover>

                {/* Target Muscles filter hidden from UI, keep logic intact */}
                {false && (
                  <Popover className="relative inline-block text-left">
                    <PopoverButton className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      <span>Target Muscles</span>
                      {selectedMuscles.length > 0 ? (
                        <span className="ml-1.5 rounded-sm bg-gray-200 px-1.5 py-0.5 text-xs font-semibold text-gray-700 tabular-nums">
                          {selectedMuscles.length}
                        </span>
                      ) : null}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                      />
                    </PopoverButton>

                    <PopoverPanel
                      transition
                      className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                      <form className="space-y-4">
                        {muscleOptions.map((muscle, optionIdx) => (
                          <div key={muscle} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  checked={selectedMuscles.includes(muscle)}
                                  onChange={() => toggleMuscle(muscle)}
                                  id={`filter-muscles-${optionIdx}`}
                                  name="muscles[]"
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-checked:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-muscles-${optionIdx}`}
                              className="pr-6 text-sm font-medium whitespace-nowrap text-gray-900"
                            >
                              {muscle}
                            </label>
                          </div>
                        ))}
                      </form>
                    </PopoverPanel>
                  </Popover>
                )}
              </div>
            </div>
          </section>

          {/* Card grid */}
          <section aria-labelledby="cards-heading" className="mt-8">
            <h2 id="cards-heading" className="sr-only">
              Exercises
            </h2>

            {layout === 'list' ? (
              <div className="grid grid-cols-1 gap-y-12 sm:gap-y-16">
                {visibleCards.map((card, cardIndex) => {
                  const stepsBlocks = parseSteps(card.steps)
                  return (
                    <Link key={card.id} href={`/${card.id}/${card.slug}`} className="group block">
                      <div className="sm:grid sm:grid-cols-2 sm:items-center sm:gap-x-8">
                        <div className="mb-4 sm:hidden">
                          <h3 className="font-medium text-gray-900">
                            {cardIndex + 1}. {card.name}
                          </h3>
                        </div>
                        <div className="relative overflow-hidden rounded-lg bg-gray-100 shadow-sm">
                          <LikeIconButton cardId={card.id} />
                          <button
                            type="button"
                            onClick={(event) => {
                              event.preventDefault()
                              event.stopPropagation()
                              setSelectedCardId(card.id)
                            }}
                            className="block w-full cursor-pointer"
                          >
                            <Image
                              alt={card.imageAlt}
                              src={card.imageSrc}
                              width={1050}
                              height={750}
                              sizes="(min-width: 640px) 50vw, 100vw"
                              className="h-auto w-full group-hover:opacity-75"
                            />
                          </button>
                        </div>
                        <div className="hidden sm:block">
                          <h3 className="text-lg font-medium text-gray-900">
                            {cardIndex + 1}. {card.name}
                          </h3>
                          <div className="mt-4 text-gray-500 *:first:mt-0">
                            {stepsBlocks.map((block, index) => {
                              if (block.type === 'heading') {
                                return (
                                  <h4 key={index} className="mt-4 font-medium text-gray-900 first:mt-0">
                                    {block.text}
                                  </h4>
                                )
                              }

                              return (
                                <ul
                                  key={index}
                                  role="list"
                                  className="mt-4 list-disc space-y-1 pl-5 text-sm/6 text-gray-500 marker:text-gray-300"
                                >
                                  {block.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="pl-2">
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {visibleCards.map((card) => (
                  <Link key={card.id} href={`/${card.id}/${card.slug}`} className="group">
                    <div className="relative overflow-hidden rounded-lg bg-gray-100 shadow-sm">
                      <LikeIconButton cardId={card.id} />
                      <button
                        type="button"
                        onClick={(event) => {
                          event.preventDefault()
                          event.stopPropagation()
                          setSelectedCardId(card.id)
                        }}
                        className="block w-full cursor-pointer"
                      >
                        <Image
                          alt={card.imageAlt}
                          src={card.imageSrc}
                          width={1050}
                          height={750}
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="h-auto w-full group-hover:opacity-75"
                        />
                      </button>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-medium text-gray-900">{card.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{card.muscles.join(', ')}</p>
                      {card.muscles2.length > 0 && (
                        <p className="mt-1 text-xs text-gray-400">{card.muscles2.join(', ')}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>

          <section aria-labelledby="featured-heading" className="relative mt-16 mb-24 overflow-hidden rounded-lg lg:h-96">
            <div className="absolute inset-0">
              <Image
                alt=""
                src={bannerImage}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
            <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
            <div className="absolute inset-x-0 bottom-0 rounded-br-lg rounded-bl-lg bg-black/75 p-6 backdrop-blur-sm backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-tl-lg lg:rounded-br-none">
              <div>
                <h2 id="featured-heading" className="text-xl font-bold text-white">
                  Train With AguaForce Weights
                </h2>
                <p className="mt-1 text-sm text-gray-300">
                  Experience dynamic fluid resistance with AguaForce water-filled weights. Order yours today to build your custom home routine.
                </p>
              </div>
              <a
                href={LINKS.shop}
                className="mt-6 flex shrink-0 items-center justify-center rounded-md border border-white/25 px-4 py-3 text-base font-medium text-white hover:bg-white/10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
              >
                Get AguaForce Weights
              </a>
            </div>
          </section>
        </Container>
      </main>

      <CardDetailsDrawer
        cardId={selectedCardId}
        open={selectedCardId !== null}
        onClose={() => setSelectedCardId(null)}
      />
    </div>
  )
}
