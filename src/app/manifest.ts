import type { MetadataRoute } from 'next'
import { COMPANY } from '@/config'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${COMPANY.brandName} Exercise Library`,
    short_name: COMPANY.brandName,
    description: 'Discover dynamic water weight exercises in the AguaForce Exercise Library. Filter by target muscle groups, build custom workout routines, and train with fluid resistance.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#08d9d6',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
