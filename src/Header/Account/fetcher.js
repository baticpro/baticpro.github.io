export default async function fetcher(url, ...args) {
    const response = await fetch(`https://b.utair.ru/${url}`, ...args);

    if (response.ok) {
        return response.json();
    }

    const { meta } = await response.json();
    throw meta;
}
