'use client'

import type { ReactNode } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const sizeStyles = {
  sm: 'sm:max-w-sm',
  md: 'sm:max-w-md',
  lg: 'sm:max-w-lg',
} as const

type DrawerSize = keyof typeof sizeStyles

type CloseButtonPosition = 'inside' | 'outside'

export function Drawer({
  title,
  titleAction,
  open,
  onClose,
  size = 'md',
  closeButtonPosition = 'inside',
  footer,
  children,
}: {
  title: string
  titleAction?: ReactNode
  open: boolean
  onClose: () => void
  size?: DrawerSize
  closeButtonPosition?: CloseButtonPosition
  footer?: ReactNode
  children?: ReactNode
}) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0 dark:bg-gray-900/50"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className={`pointer-events-auto relative w-screen max-w-full transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700 ${sizeStyles[size]}`}
            >
              {closeButtonPosition === 'outside' ? (
                <TransitionChild>
                  <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="relative rounded-md text-gray-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                  </div>
                </TransitionChild>
              ) : null}
              <div className="relative flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl dark:divide-white/10 dark:bg-gray-800 dark:after:absolute dark:after:inset-y-0 dark:after:left-0 dark:after:w-px dark:after:bg-white/10">
                <div className="flex min-h-0 flex-1 flex-col overflow-y-auto py-6">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <DialogTitle className="text-base font-semibold text-gray-900 dark:text-white">
                        {title}
                      </DialogTitle>
                      {titleAction || closeButtonPosition === 'inside' ? (
                        <div className="ml-3 flex h-7 items-center gap-2">
                          {titleAction}
                          {closeButtonPosition === 'inside' ? (
                            <button
                              type="button"
                              onClick={onClose}
                              className="relative rounded-md text-gray-400 hover:text-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:hover:text-white dark:focus-visible:outline-indigo-500"
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">{children}</div>
                </div>
                {footer ? <div className="flex shrink-0 items-center px-4 py-4 sm:px-6">{footer}</div> : null}
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
