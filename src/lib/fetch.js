export function fetchBackend(url, options) {
    return fetch("http://localhost:3001" + url, {
        ...options, // spread the existing options
        credentials: 'include', // Ensure cookies are sent with the request
    });
}