'use client'

import { useSyncExternalStore } from 'react'
import { HeartIcon } from '@heroicons/react/20/solid'

import { Button } from '@/components/button'
import { getLikedCount, subscribeToLikedCardIds } from '@/services/likes-service'

function getServerLikedCount() {
  return 0
}

export function SavedExercisesButton({ className }: { className?: string }) {
  const likedCount = useSyncExternalStore(subscribeToLikedCardIds, getLikedCount, getServerLikedCount)

  if (likedCount === 0) {
    return null
  }

  return (
    <div className={['flex justify-center', className].filter(Boolean).join(' ')}>
      <Button href="/likes" className="w-auto" color="pink">
        <HeartIcon aria-hidden="true" className="size-5" />
        View Saved Exercises
      </Button>
    </div>
  )
}
