export default async function queryCities({
    query = "",
    popular = true,
    forCity = "",
    limit = 7,
}) {
    return fetch(
        `https://b.utair.ru/api/v1/cities/?q=${query}&popular=${popular}&for_city=${forCity}&limit=${limit}`
    ).then((response) => response.json());
}
