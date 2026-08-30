export type StepsBlock = { type: 'heading'; text: string } | { type: 'list'; items: string[] }

export function parseSteps(markdown: string): StepsBlock[] {
  const blocks: StepsBlock[] = []
  const lines = markdown.split('\n')

  for (const rawLine of lines) {
    const line = rawLine.trim()
    if (!line) continue

    if (line.startsWith('### ')) {
      blocks.push({ type: 'heading', text: line.slice(4) })
      continue
    }

    if (line.startsWith('- ')) {
      const item = line.slice(2)
      const last = blocks[blocks.length - 1]
      if (last?.type === 'list') {
        last.items.push(item)
      } else {
        blocks.push({ type: 'list', items: [item] })
      }
      continue
    }
  }

  return blocks
}
