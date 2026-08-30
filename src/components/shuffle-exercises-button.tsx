'use client'

import { ArrowsRightLeftIcon } from '@heroicons/react/20/solid'

import { shuffleLikedCardIds } from '@/services/likes-service'
import { notify } from '@/services/notification-service'

export function ShuffleExercisesButton({ className }: { className?: string }) {
  return (
    <div className={['mb-8 flex justify-center', className].filter(Boolean).join(' ')}>
      <button
        type="button"
        onClick={() => {
          shuffleLikedCardIds()
          notify({ type: 'success', title: 'Exercises shuffled' })
        }}
        className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500"
      >
        <ArrowsRightLeftIcon aria-hidden="true" className="size-5" />
        Shuffle Exercises
      </button>
    </div>
  )
}
