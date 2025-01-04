export function fetchBackend(url, options) {
    return fetch("https://tiptalk.up.railway.app" + url, {
        ...options, // spread the existing options
        credentials: 'include', // Ensure cookies are sent with the request
    });
}