const LIKES_STORAGE_KEY = 'aguaforce-liked-cards'
const LIKES_CHANGED_EVENT = 'aguaforce-likes-changed'

function saveLikedCardIds(ids: string[]): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(ids))
  } catch {
    // localStorage unavailable (quota exceeded, private browsing, etc.) — ignore
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
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(LIKES_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : []
  } catch {
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
