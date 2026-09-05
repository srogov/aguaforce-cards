import { notify } from '@/services/notification-service'

const LIKES_STORAGE_KEY = 'aguaforce-liked-cards'
const LIKES_CHANGED_EVENT = 'aguaforce-likes-changed'

// Only warn once per page load so a disabled/full storage doesn't spam a notification on every like.
let storageWarningShown = false

function warnStorageUnavailable(): void {
  if (storageWarningShown) return
  storageWarningShown = true
  notify({
    type: 'warning',
    title: "Likes won't be saved",
    message: 'Your browser is blocking local storage and cookies, so liked cards can only be kept for this page view. Enable one of them (or turn off private/incognito mode) to save your likes.',
  })
}

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.split('; ').find((entry) => entry.startsWith(`${name}=`))
  if (!match) return null
  try {
    return decodeURIComponent(match.slice(name.length + 1))
  } catch {
    return null
  }
}

// Writes the cookie and reads it straight back, since a browser blocking cookies
// silently no-ops the assignment instead of throwing.
function writeCookie(name: string, value: string): boolean {
  if (typeof document === 'undefined') return false
  try {
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=31536000; SameSite=Lax`
    return document.cookie.split('; ').some((entry) => entry.startsWith(`${name}=`))
  } catch {
    return false
  }
}

function readRawIds(): string | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(LIKES_STORAGE_KEY)
    if (raw !== null) return raw
  } catch {
    // localStorage unavailable — fall back to the cookie below.
  }
  return readCookie(LIKES_STORAGE_KEY)
}

function saveLikedCardIds(ids: string[]): void {
  if (typeof window === 'undefined') return
  const json = JSON.stringify(ids)
  let saved = false
  try {
    localStorage.setItem(LIKES_STORAGE_KEY, json)
    saved = true
  } catch {
    // localStorage unavailable (quota exceeded, private browsing, disabled, etc.) — try cookies next.
  }
  if (!saved) {
    saved = writeCookie(LIKES_STORAGE_KEY, json)
  }
  if (!saved) {
    warnStorageUnavailable()
  }
  window.dispatchEvent(new Event(LIKES_CHANGED_EVENT))
}

// For useSyncExternalStore: notifies on changes made in this tab (custom event)
// and in other tabs (native storage event).
export function subscribeToLikedCardIds(onChange: () => void): () => void {
  if (typeof window === 'undefined') return () => {}
  window.addEventListener(LIKES_CHANGED_EVENT, onChange)
  window.addEventListener('storage', onChange)
  return () => {
    window.removeEventListener(LIKES_CHANGED_EVENT, onChange)
    window.removeEventListener('storage', onChange)
  }
}

export function getLikedCardIds(): string[] {
  const raw = readRawIds()
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : []
  } catch {
    // Reading happens on every page load (header, saved list, etc.) — don't warn here.
    // The warning is reserved for saveLikedCardIds, which only runs on an actual like/unlike action.
    return []
  }
}

export function isCardLiked(cardId: string): boolean {
  return getLikedCardIds().includes(cardId)
}

export function likeCard(cardId: string): void {
  const ids = new Set(getLikedCardIds())
  ids.add(cardId)
  saveLikedCardIds(Array.from(ids))
}

export function unlikeCard(cardId: string): void {
  const ids = new Set(getLikedCardIds())
  ids.delete(cardId)
  saveLikedCardIds(Array.from(ids))
}

export function toggleLike(cardId: string): boolean {
  if (isCardLiked(cardId)) {
    unlikeCard(cardId)
    return false
  }
  likeCard(cardId)
  return true
}

export function getLikedCount(): number {
  return getLikedCardIds().length
}

export function shuffleLikedCardIds(): void {
  const shuffled = getLikedCardIds()
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  saveLikedCardIds(shuffled)
}
