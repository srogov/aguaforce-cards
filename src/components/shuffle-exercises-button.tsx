'use client'

import { ArrowsRightLeftIcon } from '@heroicons/react/20/solid'

import { Button } from '@/components/button'
import { shuffleLikedCardIds } from '@/services/likes-service'
import { notify } from '@/services/notification-service'

export function ShuffleExercisesButton({ className }: { className?: string }) {
  return (
    <div className={['mb-8 flex justify-center', className].filter(Boolean).join(' ')}>
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
    </div>
  )
}
