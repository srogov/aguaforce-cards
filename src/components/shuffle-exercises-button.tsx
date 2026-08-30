'use client'

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
        className="cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500"
      >
        Shuffle Exercises
      </button>
    </div>
  )
}
