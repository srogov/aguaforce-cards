export const LINKS = {
    home: (source: string) => `/?${new URLSearchParams({ utm_source: source, utm_medium: 'exercise_library' })}`,
    shop: 'https://www.aguaforce.com',
    terms: 'https://aguaforce.com/pages/terms-of-service',
    privacy: 'https://aguaforce.com/pages/privacy-policy',
    contact: 'https://aguaforce.com/pages/contact',
    facebook: 'https://www.facebook.com/aguaforceweights',
    instagram: 'https://www.instagram.com/aguaforce.weights/',
    youtube: 'https://www.youtube.com/@aguaforceweights',
    tiktok: 'https://www.tiktok.com/@aguaforce',
}

export const COMPANY = {
    legalName: 'Agua Force, LLC',
    brandName: 'AguaForce'
}