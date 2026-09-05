'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import { ArrowDownTrayIcon, ArrowUpOnSquareIcon, PlusIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/button'
import { Modal } from '@/components/modal'

const INSTALLED_KEY = 'pwa-installed'

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

function noopSubscribe() {
  return () => {}
}

function getIsIOSSnapshot() {
  return /iPad|iPhone|iPod/.test(window.navigator.userAgent) && !('MSStream' in window)
}

function getIsStandaloneSnapshot() {
  const nav = window.navigator as Navigator & { standalone?: boolean }
  return window.matchMedia('(display-mode: standalone)').matches || nav.standalone === true
}

function getWasInstalledSnapshot() {
  try {
    return localStorage.getItem(INSTALLED_KEY) === '1'
  } catch {
    return false
  }
}

function getServerFalse() {
  return false
}

function markInstalled() {
  try {
    localStorage.setItem(INSTALLED_KEY, '1')
  } catch {
    // Ignore write failures (e.g. private browsing).
  }
}

export function InstallAppButton() {
  const isIOS = useSyncExternalStore(noopSubscribe, getIsIOSSnapshot, getServerFalse)
  const isStandalone = useSyncExternalStore(noopSubscribe, getIsStandaloneSnapshot, getServerFalse)
  const wasInstalled = useSyncExternalStore(noopSubscribe, getWasInstalledSnapshot, getServerFalse)
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [justInstalled, setJustInstalled] = useState(false)
  const [showIOSInstructions, setShowIOSInstructions] = useState(false)

  useEffect(() => {
    function handleBeforeInstallPrompt(event: Event) {
      event.preventDefault()
      setDeferredPrompt(event as BeforeInstallPromptEvent)
    }

    function handleAppInstalled() {
      markInstalled()
      setJustInstalled(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  async function handleInstall() {
    if (isIOS) {
      setShowIOSInstructions(true)
      return
    }
    if (!deferredPrompt) return
    await deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      markInstalled()
      setJustInstalled(true)
    }
    setDeferredPrompt(null)
  }

  if (isStandalone || wasInstalled || justInstalled || (!isIOS && !deferredPrompt)) {
    return null
  }

  return (
    <>
      <Button color="outline" onClick={handleInstall} className="w-auto lg:hidden">
        <ArrowDownTrayIcon aria-hidden="true" className="size-5" />
        Get the App
      </Button>

      <Modal
        open={showIOSInstructions}
        onClose={() => setShowIOSInstructions(false)}
        title="Install the App"
        icon={ArrowDownTrayIcon}
      >
        <ol className="mt-4 space-y-3 text-left text-sm text-gray-500 dark:text-gray-400">
          <li className="flex items-center gap-x-3">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
              <ArrowUpOnSquareIcon aria-hidden="true" className="size-4" />
            </span>
            Tap the Share button in your browser&apos;s toolbar.
          </li>
          <li className="flex items-center gap-x-3">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
              <PlusIcon aria-hidden="true" className="size-4" />
            </span>
            Select &ldquo;Add to Home Screen&rdquo;.
          </li>
        </ol>
      </Modal>
    </>
  )
}
