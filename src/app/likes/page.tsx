import { connection } from 'next/server'
import { ExerciseCatalog } from '@/components/exercise-catalog'

export default async function Likes() {
  // Forces dynamic rendering so a shared filtered link's initial HTML
  // already matches the URL instead of flashing unfiltered content.
  await connection()
  return (
    <ExerciseCatalog
      title="Saved Exercises"
      description="Exercises you've saved for quick access later."
      onlyLiked
    />
  )
}
