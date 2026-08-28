let hasNavigatedInternally = false

export function markInternalNavigation() {
  hasNavigatedInternally = true
}

export function hasInternalHistory() {
  return hasNavigatedInternally
}
