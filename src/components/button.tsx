import type { ComponentProps, ReactNode } from 'react'

const colorStyles = {
  main: 'bg-indigo-600 text-white hover:bg-indigo-700',
  plain: 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
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
  Omit<ComponentProps<'a'>, keyof CommonProps> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button({ color = 'main', className, children, ...props }: ButtonProps) {
  const classes = [baseStyles, colorStyles[color], className].filter(Boolean).join(' ')

  if (props.href !== undefined) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
