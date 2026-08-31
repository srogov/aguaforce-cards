import { LINKS } from '@/config'

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
    { name: 'Shop', href: LINKS.shop },
    { name: 'Exercise Library', href: LINKS.home('nav_exercise_library') },
  ],
}

export const footerNavigation: NavigationPage[] = [
  ...navigation.pages,
  { name: 'Terms', href: LINKS.terms },
  { name: 'Privacy', href: LINKS.privacy },
  { name: 'Contact', href: LINKS.contact },
]
