const colorClasses = {
  gray: 'bg-gray-50 text-gray-600 inset-ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:inset-ring-gray-400/20',
  red: 'bg-red-50 text-red-700 inset-ring-red-600/10 dark:bg-red-400/10 dark:text-red-400 dark:inset-ring-red-400/20',
  yellow:
    'bg-yellow-50 text-yellow-800 inset-ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-500 dark:inset-ring-yellow-400/20',
  green:
    'bg-green-50 text-green-700 inset-ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:inset-ring-green-500/20',
  blue: 'bg-blue-50 text-blue-700 inset-ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:inset-ring-blue-400/30',
  indigo:
    'bg-indigo-50 text-indigo-700 inset-ring-indigo-700/10 dark:bg-indigo-400/10 dark:text-indigo-400 dark:inset-ring-indigo-400/30',
  purple:
    'bg-purple-50 text-purple-700 inset-ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:inset-ring-purple-400/30',
  pink: 'bg-pink-50 text-pink-700 inset-ring-pink-700/10 dark:bg-pink-400/10 dark:text-pink-400 dark:inset-ring-pink-400/20',
} as const

export type BadgeColor = keyof typeof colorClasses

export function Badge({
  color = 'gray',
  children,
}: {
  color?: BadgeColor
  children: React.ReactNode
}) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium inset-ring ${colorClasses[color]}`}
    >
      {children}
    </span>
  )
}

const removableColorClasses = {
  gray: {
    badge: 'bg-gray-100 text-gray-600 dark:bg-gray-400/10 dark:text-gray-400',
    button: 'hover:bg-gray-500/20 dark:hover:bg-gray-400/20',
    stroke: 'stroke-gray-700/50 group-hover:stroke-gray-700/75 dark:stroke-gray-400 dark:group-hover:stroke-gray-300',
  },
  red: {
    badge: 'bg-red-100 text-red-700 dark:bg-red-400/10 dark:text-red-400',
    button: 'hover:bg-red-600/20 dark:hover:bg-red-400/20',
    stroke: 'stroke-red-700/50 group-hover:stroke-red-700/75 dark:stroke-red-400 dark:group-hover:stroke-red-300',
  },
  yellow: {
    badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-400/10 dark:text-yellow-500',
    button: 'hover:bg-yellow-600/20 dark:hover:bg-yellow-400/20',
    stroke:
      'stroke-yellow-800/50 group-hover:stroke-yellow-800/75 dark:stroke-yellow-400 dark:group-hover:stroke-yellow-300',
  },
  green: {
    badge: 'bg-green-100 text-green-700 dark:bg-green-400/10 dark:text-green-400',
    button: 'hover:bg-green-600/20 dark:hover:bg-green-400/20',
    stroke:
      'stroke-green-800/50 group-hover:stroke-green-800/75 dark:stroke-green-400 dark:group-hover:stroke-green-300',
  },
  blue: {
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-400/10 dark:text-blue-400',
    button: 'hover:bg-blue-600/20 dark:hover:bg-blue-400/20',
    stroke: 'stroke-blue-800/50 group-hover:stroke-blue-800/75 dark:stroke-blue-400 dark:group-hover:stroke-blue-300',
  },
  indigo: {
    badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-400',
    button: 'hover:bg-indigo-600/20 dark:hover:bg-indigo-400/20',
    stroke:
      'stroke-indigo-700/50 group-hover:stroke-indigo-700/75 dark:stroke-indigo-400 dark:group-hover:stroke-indigo-300',
  },
  purple: {
    badge: 'bg-purple-100 text-purple-700 dark:bg-purple-400/10 dark:text-purple-400',
    button: 'hover:bg-purple-600/20 dark:hover:bg-purple-400/20',
    stroke:
      'stroke-violet-700/50 group-hover:stroke-violet-700/75 dark:stroke-violet-400 dark:group-hover:stroke-violet-300',
  },
  pink: {
    badge: 'bg-pink-100 text-pink-700 dark:bg-pink-400/10 dark:text-pink-400',
    button: 'hover:bg-pink-600/20 dark:hover:bg-pink-400/20',
    stroke: 'stroke-pink-800/50 group-hover:stroke-pink-800/75 dark:stroke-pink-400 dark:group-hover:stroke-pink-300',
  },
} as const satisfies Record<BadgeColor, { badge: string; button: string; stroke: string }>

export function RemovableBadge({
  color = 'gray',
  children,
  onRemove,
}: {
  color?: BadgeColor
  children: React.ReactNode
  onRemove?: () => void
}) {
  const classes = removableColorClasses[color]

  return (
    <span
      className={`inline-flex items-center gap-x-0.5 rounded-md px-2 py-1 text-xs font-medium ${classes.badge}`}
    >
      {children}
      <button
        type="button"
        onClick={onRemove}
        className={`group relative -mr-1 size-3.5 cursor-pointer rounded-xs ${classes.button}`}
      >
        <span className="sr-only">Remove</span>
        <svg viewBox="0 0 14 14" className={`size-3.5 ${classes.stroke}`}>
          <path d="M4 4l6 6m0-6l-6 6" />
        </svg>
        <span className="absolute -inset-1" />
      </button>
    </span>
  )
}
