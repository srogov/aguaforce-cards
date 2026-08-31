export const LINKS = {
    home: (source: string) => `/?${new URLSearchParams({ utm_source: source, utm_medium: 'exercise_library' })}`,
    shop: 'https://www.aguaforce.com',
    terms: 'https://www.aguaforce.com/terms',
    privacy: 'https://www.aguaforce.com/privacy',
    contact: 'https://www.aguaforce.com/contact',
    facebook: 'https://www.facebook.com/aguaforceweights',
    instagram: 'https://www.instagram.com/aguaforce.weights/',
    youtube: 'https://www.youtube.com/@aguaforceweights',
    tiktok: 'https://www.tiktok.com/@aguaforce',
}

export const COMPANY = {
    legalName: 'Agua Force, LLC',
    brandName: 'Aguaforce'
}