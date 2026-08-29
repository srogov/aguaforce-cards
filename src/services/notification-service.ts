import type { NotificationType } from '@/components/notification'

export type NotificationState = {
  id: number
  type: NotificationType
  title: string
  message?: string
}

let currentNotification: NotificationState | null = null
let nextId = 0
const listeners = new Set<() => void>()

function emit(): void {
  for (const listener of listeners) listener()
}

export function subscribeToNotification(onChange: () => void): () => void {
  listeners.add(onChange)
  return () => {
    listeners.delete(onChange)
  }
}

export function getNotification(): NotificationState | null {
  return currentNotification
}

export function notify(notification: { type?: NotificationType; title: string; message?: string }): void {
  currentNotification = { id: nextId++, type: notification.type ?? 'success', title: notification.title, message: notification.message }
  emit()
}

export function dismissNotification(): void {
  currentNotification = null
  emit()
}
