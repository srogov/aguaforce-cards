import Image from 'next/image'
import { footerNavigation } from '@/data/navigation'

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-white">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
          {footerNavigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-900">
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-16 flex justify-center">
          <Image
            alt=""
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            width={32}
            height={32}
            unoptimized
            className="h-8 w-auto"
          />
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-600">&copy; 2021 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}
