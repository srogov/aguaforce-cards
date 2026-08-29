'use client'

import { useSyncExternalStore } from 'react'
import { Notification } from '@/components/notification'
import { getNotification, subscribeToNotification, dismissNotification } from '@/services/notification-service'

function getServerSnapshot() {
  return null
}

export function NotificationHost() {
  const notification = useSyncExternalStore(subscribeToNotification, getNotification, getServerSnapshot)

  return (
    <Notification
      type={notification?.type}
      title={notification?.title ?? ''}
      message={notification?.message}
      show={notification !== null}
      onClose={dismissNotification}
    />
  )
}
