import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import { getCardById, getCardImageDownloadName } from '@/services/cards-service'
import { parseSteps } from '@/lib/steps'
import { BackLink } from '@/components/back-link'
import { LikeButton } from '@/components/like-button'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { ShareLinks } from '@/components/share-links'

export default async function CardPage({
  params,
}: {
  params: Promise<{ 'card-id': string; slug: string }>
}) {
  const { 'card-id': cardId } = await params
  const card = getCardById(cardId)

  if (!card) {
    notFound()
  }

  const stepsBlocks = parseSteps(card.steps)

  return (
    <div className="bg-white">
      <Container className="py-6 sm:py-10">
        <BackLink href="/" label="All Exercises" />

        {/* Card */}
        <div className="mt-4 lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          {/* Card image */}
          <div className="lg:col-span-4 lg:row-end-1">
            <Image
              alt={card.imageAlt}
              src={card.imageSrc}
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 57vw, 100vw"
              className="aspect-4/3 w-full rounded-lg bg-gray-100 object-cover shadow-sm"
            />
          </div>

          {/* Card details */}
          <div className="mx-auto mt-4 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{card.name}</h1>
              </div>
            </div>

            <p className="mt-6 text-gray-500">{card.description}</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <LikeButton cardId={card.id} />
              <Button color="main" href={card.imageSrc} download={getCardImageDownloadName(card)}>
                <ArrowDownTrayIcon aria-hidden="true" className="size-5" />
                Download
              </Button>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
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

            <div className="mt-10">
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

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="font-medium text-gray-900">Share</h3>
              <ShareLinks title={card.name} />
            </div>
          </div>

          <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
            <div className="text-gray-500 *:first:mt-0">
              {stepsBlocks.map((block, index) => {
                if (block.type === 'heading') {
                  return (
                    <h3 key={index} className="font-medium text-gray-900 mt-10 first:mt-0">
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
        </div>
      </Container>
    </div>
  )
}
