'use client'

import type { ReactNode } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const iconColorStyles = {
  sky: 'bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400',
  green: 'bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400',
  red: 'bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400',
  yellow: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-400',
} as const

const sizeStyles = {
  sm: 'sm:max-w-sm',
  lg: 'sm:max-w-lg',
} as const

type ModalIconColor = keyof typeof iconColorStyles
type ModalSize = keyof typeof sizeStyles

/** `centered`: icon stacked above a centered title (confirmations, success states). `inline`: icon beside a left-aligned title with a corner close button (destructive confirmations). */
type ModalLayout = 'centered' | 'inline'

export function Modal({
  open,
  onClose,
  title,
  description,
  icon: Icon,
  iconColor = 'sky',
  layout = 'centered',
  size = layout === 'inline' ? 'lg' : 'sm',
  showCloseButton = layout === 'inline',
  footer,
  children,
}: {
  open: boolean
  onClose: () => void
  title: string
  description?: ReactNode
  icon?: (props: React.SVGProps<SVGSVGElement>) => ReactNode
  iconColor?: ModalIconColor
  layout?: ModalLayout
  size?: ModalSize
  showCloseButton?: boolean
  footer?: ReactNode
  children?: ReactNode
}) {
  const inline = layout === 'inline'

  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in dark:bg-gray-900/50"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className={`relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95 dark:bg-gray-800 dark:outline dark:-outline-offset-1 dark:outline-white/10 ${sizeStyles[size]}`}
          >
            {showCloseButton ? (
              <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-sky-600 dark:bg-gray-800 dark:hover:text-gray-300 dark:focus:outline-white"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
            ) : null}

            <div className={inline ? 'sm:flex sm:items-start' : undefined}>
              {Icon ? (
                <div
                  className={
                    inline
                      ? `mx-auto flex size-12 shrink-0 items-center justify-center rounded-full sm:mx-0 sm:size-10 ${iconColorStyles[iconColor]}`
                      : `mx-auto flex size-12 items-center justify-center rounded-full ${iconColorStyles[iconColor]}`
                  }
                >
                  <Icon aria-hidden="true" className="size-6" />
                </div>
              ) : null}
              <div
                className={
                  inline
                    ? `mt-3 text-center sm:mt-0 sm:text-left ${Icon ? 'sm:ml-4' : ''}`
                    : Icon
                      ? 'mt-3 text-center sm:mt-5'
                      : 'text-center'
                }
              >
                <DialogTitle as="h3" className="text-base font-semibold text-gray-900 dark:text-white">
                  {title}
                </DialogTitle>
                {description ? (
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
                  </div>
                ) : null}
                {children}
              </div>
            </div>

            {footer ? (
              <div className={inline ? 'mt-5 sm:mt-4 sm:flex sm:flex-row-reverse' : 'mt-5 sm:mt-6'}>{footer}</div>
            ) : null}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
