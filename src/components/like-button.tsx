'use client'

import { useSyncExternalStore } from 'react'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/20/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import { isCardLiked, toggleLike, subscribeToLikedCardIds } from '@/services/likes-service'
import { Button } from '@/components/button'

function getServerSnapshot() {
  return false
}

export function LikeButton({ cardId }: { cardId: string }) {
  const liked = useSyncExternalStore(subscribeToLikedCardIds, () => isCardLiked(cardId), getServerSnapshot)

  return (
    <Button color="plain" onClick={() => toggleLike(cardId)} aria-pressed={liked}>
      {liked ? (
        <HeartIconSolid aria-hidden="true" className="size-5 text-red-400" />
      ) : (
        <HeartIconOutline aria-hidden="true" className="size-5" />
      )}
      {liked ? 'Liked' : 'Like'}
    </Button>
  )
}

export function LikeIconButton({
  cardId,
  className = 'absolute top-2 right-2 z-10 flex size-8 cursor-pointer items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm hover:bg-white',
}: {
  cardId: string
  className?: string
}) {
  const liked = useSyncExternalStore(subscribeToLikedCardIds, () => isCardLiked(cardId), getServerSnapshot)

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault()
        event.stopPropagation()
        toggleLike(cardId)
      }}
      aria-pressed={liked}
      aria-label={liked ? 'Unlike' : 'Like'}
      className={className}
    >
      {liked ? (
        <HeartIconSolid aria-hidden="true" className="size-5 text-red-400" />
      ) : (
        <HeartIconOutline aria-hidden="true" className="size-5 text-gray-700" />
      )}
    </button>
  )
}
