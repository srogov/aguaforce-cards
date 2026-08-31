export const LINKS = {
    home: (source: string) => `/?${new URLSearchParams({ utm_source: source, utm_medium: 'internal_link' })}`,
    shop: 'https://www.aguaforce.com',
    terms: 'https://www.aguaforce.com/terms',
    privacy: 'https://www.aguaforce.com/privacy',
    contact: 'https://www.aguaforce.com/contact',
}