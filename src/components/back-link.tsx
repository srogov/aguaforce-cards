'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { hasInternalHistory } from '@/lib/navigation-history'

export function BackLink({ href, label }: { href: string; label: string }) {
  const router = useRouter()

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    if (hasInternalHistory()) {
      router.back()
    } else {
      router.push(href)
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="inline-flex items-center gap-x-2 text-sm font-medium text-gray-500 hover:text-gray-700"
    >
      <ArrowLeftIcon aria-hidden="true" className="size-4" />
      {label}
    </a>
  )
}
