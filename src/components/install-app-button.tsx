'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/button'

const INSTALLED_KEY = 'pwa-installed'

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

function noopSubscribe() {
  return () => {}
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
  const isStandalone = useSyncExternalStore(noopSubscribe, getIsStandaloneSnapshot, getServerFalse)
  const wasInstalled = useSyncExternalStore(noopSubscribe, getWasInstalledSnapshot, getServerFalse)
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [justInstalled, setJustInstalled] = useState(false)

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
    if (!deferredPrompt) return
    await deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      markInstalled()
      setJustInstalled(true)
    }
    setDeferredPrompt(null)
  }

  if (isStandalone || wasInstalled || justInstalled || !deferredPrompt) {
    return null
  }

  return (
    <Button color="outline" onClick={handleInstall} className="w-auto lg:hidden">
      <ArrowDownTrayIcon aria-hidden="true" className="size-5" />
      Get the App
    </Button>
  )
}
