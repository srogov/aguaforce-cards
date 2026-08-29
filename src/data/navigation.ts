export type NavigationFeaturedItem = {
  name: string
  href: string
  imageSrc: string
  imageAlt: string
}

export type NavigationCategory = {
  name: string
  featured: NavigationFeaturedItem[]
}

export type NavigationPage = {
  name: string
  href: string
}

export const navigation: {
  categories: NavigationCategory[]
  pages: NavigationPage[]
} = {
  categories: [],
  pages: [
    { name: 'Shop', href: '#' },
    { name: 'Exercise Library', href: '#' },
  ],
}

export const footerNavigation: NavigationPage[] = [
  ...navigation.pages,
  { name: 'Terms', href: '#' },
  { name: 'Privacy', href: '#' },
  { name: 'Contact', href: '#' },
]
