export function getStrapiURL() {
    return process.env.STRAPI_API_URL || 'http://localhost:1337';
}

export function getStrapiMedia(url: string) {
    if (url.startsWith('/')) {
        return `${process.env.STRAPI_API_URL || 'http://localhost:1337'}${url}`;
    }
    return url;
}