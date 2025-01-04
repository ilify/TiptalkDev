export function fetchBackend(url, options) {
    return fetch("http://tiptalk.up.railway.app" + url, {
        ...options, // spread the existing options
        credentials: 'include', // Ensure cookies are sent with the request
    });
}