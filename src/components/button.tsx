import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const colorStyles = {
  main: 'bg-sky-600 text-white hover:bg-sky-700',
  plain: 'bg-sky-50 text-sky-700 hover:bg-sky-100',
  pink: 'bg-pink-600 text-white hover:bg-pink-700',
  outline: 'border-sky-600 bg-transparent text-sky-600 hover:bg-sky-50',
} as const

const baseStyles =
  'flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-md border border-transparent px-8 py-3 text-base font-medium focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden'

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
