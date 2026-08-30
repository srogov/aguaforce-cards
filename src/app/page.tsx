import { connection } from 'next/server'
import { ExerciseCatalog } from '@/components/exercise-catalog'

export default async function Home() {
  // Forces dynamic rendering so a shared filtered link's initial HTML
  // already matches the URL instead of flashing unfiltered content.
  await connection()
  return (
    <ExerciseCatalog>
      <div className="py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Exercise Library</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
          Exercises to perform using your AguaForce water weights.
        </p>
      </div>
    </ExerciseCatalog>
  )
}
