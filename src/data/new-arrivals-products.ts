export type Product = {
  id: number
  name: string
  href: string
  price: string
  description: string
  imageSrc: string
  imageAlt: string
}

export const newArrivalsProducts: Product[] = [
  {
    id: 1,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$13',
    description: '3 sizes available',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-01-image-card-01.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 2,
    name: 'Focus Card Holder',
    href: '#',
    price: '$64',
    description: 'Walnut',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-01-image-card-02.jpg',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 3,
    name: 'Focus Carry Pouch',
    href: '#',
    price: '$32',
    description: 'Heather Gray',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-01-image-card-03.jpg',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  {
    id: 4,
    name: 'Focus Multi-Pack',
    href: '#',
    price: '$39',
    description: '3 refill packs',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-01-image-card-04.jpg',
    imageAlt: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
  },
  {
    id: 5,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    description: 'Black and brass',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-01-image-card-05.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: 'Brass Scissors',
    href: '#',
    price: '$50',
    description: 'Includes brass stand',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-01-image-card-06.jpg',
    imageAlt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
  },
]
