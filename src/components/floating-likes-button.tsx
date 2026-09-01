'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/20/solid'
import { getLikedCount, subscribeToLikedCardIds } from '@/services/likes-service'

function getServerLikedCount() {
  return 0
}

export function FloatingLikesButton() {
  const pathname = usePathname()
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

  if (pathname === '/likes' || likedCount === 0) {
    return null
  }

  return (
    <Link
      href="/likes"
      className="group fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-pink-100/70 px-3 py-2 shadow-lg outline-1 outline-black/5 transition-transform hover:scale-105"
    >
      {highlighted ? (
        <HeartIconSolid aria-hidden="true" className="size-8 shrink-0 text-pink-500" />
      ) : (
        <HeartIconOutline
          aria-hidden="true"
          className="size-8 shrink-0 text-gray-400 group-hover:text-gray-500"
        />
      )}
      <span className="inline-flex h-6 items-center overflow-hidden">
        <span
          key={likedCount}
          className={`inline-block text-lg font-semibold ${highlighted ? 'text-pink-500' : 'text-gray-700 group-hover:text-gray-800'} ${
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
  )
}
