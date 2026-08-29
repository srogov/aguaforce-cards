'use client'

import { useSyncExternalStore } from 'react'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/20/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import { isCardLiked, toggleLike, subscribeToLikedCardIds } from '@/services/likes-service'
import { notify } from '@/services/notification-service'
import { Button } from '@/components/button'

function getServerSnapshot() {
  return false
}

function notifyLikeChange(liked: boolean): void {
  notify({ type: 'success', title: liked ? 'Added to Saved Exercises' : 'Removed from Saved Exercisess' })
}

export function LikeButton({ cardId }: { cardId: string }) {
  const liked = useSyncExternalStore(subscribeToLikedCardIds, () => isCardLiked(cardId), getServerSnapshot)

  return (
    <Button color="plain" onClick={() => notifyLikeChange(toggleLike(cardId))} aria-pressed={liked}>
      {liked ? (
        <HeartIconSolid aria-hidden="true" className="size-5 text-red-400" />
      ) : (
        <HeartIconOutline aria-hidden="true" className="size-5" />
      )}
      {liked ? 'Liked' : 'Like'}
    </Button>
  )
}

export function LikeIconButton({ cardId }: { cardId: string }) {
  const liked = useSyncExternalStore(subscribeToLikedCardIds, () => isCardLiked(cardId), getServerSnapshot)

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault()
        event.stopPropagation()
        notifyLikeChange(toggleLike(cardId))
      }}
      aria-pressed={liked}
      aria-label={liked ? 'Unlike' : 'Like'}
      className="absolute top-2 right-2 z-10 flex size-8 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm hover:bg-white"
    >
      {liked ? (
        <HeartIconSolid aria-hidden="true" className="size-5 text-red-400" />
      ) : (
        <HeartIconOutline aria-hidden="true" className="size-5 text-gray-700" />
      )}
    </button>
  )
}
