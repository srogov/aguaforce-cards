'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { markInternalNavigation } from '@/lib/navigation-history'

export function NavigationTracker() {
  const pathname = usePathname()
  const initialPathname = useRef(pathname)

  useEffect(() => {
    if (pathname !== initialPathname.current) {
      markInternalNavigation()
    }
  }, [pathname])

  return null
}
