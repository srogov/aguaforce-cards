'use client'

import { useSyncExternalStore } from 'react'
import { ArrowsRightLeftIcon } from '@heroicons/react/20/solid'

import { Button } from '@/components/button'
import { getLikedCardIds, shuffleLikedCardIds, subscribeToLikedCardIds } from '@/services/likes-service'
import { notify } from '@/services/notification-service'

function getServerLikedCardIdsKey() {
  return ''
}

export function ShuffleExercisesButton() {
  const likedCardIdsKey = useSyncExternalStore(
    subscribeToLikedCardIds,
    () => getLikedCardIds().join(','),
    getServerLikedCardIdsKey,
  )

  if (!likedCardIdsKey) return null

  return (
    <Button
      onClick={() => {
        shuffleLikedCardIds()
        notify({ type: 'success', title: 'Exercises shuffled' })
      }}
      className="w-auto"
    >
      <ArrowsRightLeftIcon aria-hidden="true" className="size-5" />
      Shuffle Exercises
    </Button>
  )
}
