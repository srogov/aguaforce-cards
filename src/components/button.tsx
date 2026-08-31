import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const colorStyles = {
  main: 'bg-indigo-600 text-white hover:bg-indigo-700',
  plain: 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
  pink: 'bg-pink-600 text-white hover:bg-pink-700',
} as const

const baseStyles =
  'flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-md border border-transparent px-8 py-3 text-base font-medium focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden'

type ButtonColor = keyof typeof colorStyles

type CommonProps = {
  color?: ButtonColor
  children: ReactNode
}

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<'button'>, keyof CommonProps> & {
    href?: undefined
  }

type ButtonAsAnchor = CommonProps &
  Omit<ComponentProps<typeof Link>, keyof CommonProps> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button({ color = 'main', className, children, ...props }: ButtonProps) {
  const classes = twMerge(baseStyles, colorStyles[color], className)

  if (props.href !== undefined) {
    return (
      <Link className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
