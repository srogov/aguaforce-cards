import { connection } from 'next/server'
import { ExerciseCatalog } from '@/components/exercise-catalog'
import { ShuffleExercisesButton } from '@/components/shuffle-exercises-button'
import { BackLink } from '@/components/back-link'

export default async function Likes() {
  // Forces dynamic rendering so a shared filtered link's initial HTML
  // already matches the URL instead of flashing unfiltered content.
  await connection()
  return (
    <ExerciseCatalog onlyLiked layout="list">
      <div className="pt-6 sm:pt-10">
        <BackLink href="/" label="All Exercises" />
      </div>
      <div className="py-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Saved Exercises</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
          Exercises you&apos;ve saved for quick access later.
        </p>
        <ShuffleExercisesButton className="mt-4" />
      </div>
    </ExerciseCatalog>
  )
}
