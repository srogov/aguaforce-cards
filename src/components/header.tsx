'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, DialogBackdrop, DialogPanel, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid, ChevronDownIcon } from '@heroicons/react/20/solid'
import { navigation } from '@/data/navigation'
import { LINKS } from '@/config'
import { getTargetAreaOptions } from '@/services/cards-service'
import { getLikedCount, subscribeToLikedCardIds } from '@/services/likes-service'
import { Container } from '@/components/container'

function getServerLikedCount() {
  return 0
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const targetAreaOptions = getTargetAreaOptions()
  const likedCount = useSyncExternalStore(subscribeToLikedCardIds, getLikedCount, getServerLikedCount)
  const highlighted = likedCount > 0
  const previousLikedCount = useRef(likedCount)
  const [countAnimation, setCountAnimation] = useState<'in' | 'out' | null>(null)

  useEffect(() => {
    if (likedCount > previousLikedCount.current) {
      setCountAnimation('in')
    } else if (likedCount < previousLikedCount.current) {
      setCountAnimation('out')
    }
    previousLikedCount.current = likedCount
  }, [likedCount])

  return (
    <div>
      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="relative -m-2 inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="mt-2 space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div className="bg-white shadow-xs">
            <Container>
              <div className="flex h-16 items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <Link href={LINKS.home('header_logo_desktop')}>
                    <span className="sr-only">Your Company</span>
                    <Image
                      alt=""
                      src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                      width={32}
                      height={32}
                      unoptimized
                      className="h-8 w-auto"
                    />
                  </Link>
                </div>

                <div className="hidden h-full lg:flex">
                  <div className="flex h-full items-center justify-center space-x-8">
                    {navigation.pages.map((page) =>
                      page.name === 'Exercise Library' ? (
                        <Popover key={page.name} className="relative flex h-full items-center">
                          <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-medium text-gray-700 hover:text-gray-800">
                            <span>{page.name}</span>
                            <ChevronDownIcon aria-hidden="true" className="size-5" />
                          </PopoverButton>

                          <PopoverPanel
                            transition
                            className="absolute top-full left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 bg-transparent px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                          >
                            {({ close }) => (
                              <div className="w-56 shrink rounded-xl bg-white p-4 text-sm/6 font-semibold text-gray-900 shadow-lg outline-1 outline-gray-900/5 dark:bg-gray-800 dark:text-white dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
                                {targetAreaOptions.map((targetArea) => (
                                  <Link
                                    key={targetArea}
                                    href={`/?${new URLSearchParams({ 'target-muscle-groups': targetArea }).toString()}`}
                                    onClick={() => close()}
                                    className="block p-2 hover:text-indigo-600 dark:hover:text-indigo-400"
                                  >
                                    {targetArea}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </PopoverPanel>
                        </Popover>
                      ) : (
                        <a
                          key={page.name}
                          href={page.href}
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                          {page.name}
                        </a>
                      ),
                    )}
                  </div>
                </div>

                {/* Mobile menu (lg-) */}
                <div className="flex flex-1 items-center lg:hidden">
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="-ml-2 cursor-pointer rounded-md bg-white p-2 text-gray-400"
                  >
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                  </button>
                </div>

                {/* Logo (lg-) */}
                <Link href={LINKS.home('header_logo_mobile')} className="lg:hidden">
                  <span className="sr-only">Your Company</span>
                  <Image
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    width={32}
                    height={32}
                    unoptimized
                    className="h-8 w-auto"
                  />
                </Link>

                <div className="flex flex-1 items-center justify-end">
                  {/* Wishlist */}
                  <div className="flow-root">
                    <Link href="/likes" className="group -m-2 flex items-center p-2">
                      {highlighted ? (
                        <HeartIconSolid aria-hidden="true" className="size-6 shrink-0 text-red-500" />
                      ) : (
                        <HeartIconOutline
                          aria-hidden="true"
                          className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                        />
                      )}
                      <span className="ml-1 inline-flex h-5 items-center overflow-hidden">
                        <span
                          key={likedCount}
                          className={`inline-block text-sm font-medium ${highlighted ? 'text-red-500' : 'text-gray-700 group-hover:text-gray-800'} ${
                            countAnimation === 'in'
                              ? 'animate-[like-count-in_200ms_ease-out]'
                              : countAnimation === 'out'
                                ? 'animate-[like-count-out_200ms_ease-out]'
                                : ''
                          }`}
                        >
                          {likedCount}
                        </span>
                      </span>
                      <span className="sr-only">items in wishlist, view favorites</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </nav>
      </header>
    </div>
  )
}
