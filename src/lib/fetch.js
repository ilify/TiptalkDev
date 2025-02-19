const isProd = process.env.NODE_ENV === 'production';
const link = isProd ? 'https://tiptalk.up.railway.app' : 'http://102.152.193.66:3001';


export function fetchBackend(url, options) {
    return fetch(link + url, {
        ...options, // spread the existing options
        credentials: 'include', // Ensure cookies are sent with the request
        // mode: 'no-cors'
    });
}