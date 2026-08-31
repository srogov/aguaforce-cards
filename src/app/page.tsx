import { connection } from 'next/server'
import { ExerciseCatalog } from '@/components/exercise-catalog'
import { SavedExercisesButton } from '@/components/saved-exercises-button'

export default async function Home() {
  // Forces dynamic rendering so a shared filtered link's initial HTML
  // already matches the URL instead of flashing unfiltered content.
  await connection()
  return (
    <ExerciseCatalog>
      <div className="py-14 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Exercise Library</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
          Explore exercises designed for your AguaForce water weights. Tap the heart to save your favorites and create your custom workout routine.
        </p>
        <SavedExercisesButton className="mt-6" />
      </div>
    </ExerciseCatalog>
  )
}
