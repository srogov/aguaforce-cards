'use client'

import { useSyncExternalStore } from 'react'
import { HeartIcon } from '@heroicons/react/20/solid'
import { isCardLiked, toggleLike, subscribeToLikedCardIds } from '@/services/likes-service'
import { Button } from '@/components/button'

function getServerSnapshot() {
  return false
}

export function LikeButton({ cardId }: { cardId: string }) {
  const liked = useSyncExternalStore(subscribeToLikedCardIds, () => isCardLiked(cardId), getServerSnapshot)

  return (
    <Button color="plain" onClick={() => toggleLike(cardId)} aria-pressed={liked}>
      <HeartIcon aria-hidden="true" className={liked ? 'size-5 text-red-400' : 'size-5'} />
      {liked ? 'Liked' : 'Like'}
    </Button>
  )
}
