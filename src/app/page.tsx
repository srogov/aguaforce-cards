import { connection } from 'next/server'
import { ExerciseCatalog } from '@/components/exercise-catalog'

export default async function Home() {
  // Forces dynamic rendering so a shared filtered link's initial HTML
  // already matches the URL instead of flashing unfiltered content.
  await connection()
  return <ExerciseCatalog />
}
