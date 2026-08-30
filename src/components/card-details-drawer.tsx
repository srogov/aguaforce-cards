'use client'

import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import { getCardById, getCardImageDownloadName } from '@/services/cards-service'
import { parseSteps } from '@/lib/steps'
import { Drawer } from '@/components/drawer'
import { LikeIconButton } from '@/components/like-button'
import { Button } from '@/components/button'

export function CardDetailsDrawer({
  cardId,
  open,
  onClose,
}: {
  cardId: string | null
  open: boolean
  onClose: () => void
}) {
  const card = cardId ? getCardById(cardId) : undefined

  if (!card) {
    return <Drawer title="Exercise" open={open} onClose={onClose} size="lg" />
  }

  const stepsBlocks = parseSteps(card.steps)

  return (
    <Drawer
      title={card.name}
      titleAction={
        <LikeIconButton
          cardId={card.id}
          className="flex size-8 items-center justify-center rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-white"
        />
      }
      open={open}
      onClose={onClose}
      size="lg"
      closeButtonPosition="outside"
      footer={
        <Button color="main" href={card.imageSrc} download={getCardImageDownloadName(card)}>
          <ArrowDownTrayIcon aria-hidden="true" className="size-5" />
          Download
        </Button>
      }
    >
      <div className="mx-auto max-w-2xl">
        <Image
          alt={card.imageAlt}
          src={card.imageSrc}
          width={1200}
          height={900}
          sizes="(min-width: 640px) 42rem, 100vw"
          className="aspect-4/3 w-full rounded-lg bg-gray-100 object-cover shadow-sm"
        />

        <p className="mt-6 text-gray-500">{card.description}</p>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <h3 className="font-medium text-gray-900">Main Muscles</h3>
          <div className="mt-4">
            <ul role="list" className="list-disc space-y-1 pl-5 text-sm/6 text-gray-500 marker:text-gray-300">
              {card.muscles.map((muscle) => (
                <li key={muscle} className="pl-2">
                  {muscle}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-medium text-gray-900">Supporting Muscles</h3>
          <div className="mt-4">
            <ul role="list" className="list-disc space-y-1 pl-5 text-sm/6 text-gray-500 marker:text-gray-300">
              {card.muscles2.map((muscle) => (
                <li key={muscle} className="pl-2">
                  {muscle}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6 text-gray-500 *:first:mt-0">
          {stepsBlocks.map((block, index) => {
            if (block.type === 'heading') {
              return (
                <h3 key={index} className="font-medium text-gray-900">
                  {block.text}
                </h3>
              )
            }

            return (
              <ul
                key={index}
                role="list"
                className="mt-4 list-disc space-y-1 pl-5 text-sm/6 text-gray-500 marker:text-gray-300"
              >
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="pl-2">
                    {item}
                  </li>
                ))}
              </ul>
            )
          })}
        </div>
      </div>
    </Drawer>
  )
}
