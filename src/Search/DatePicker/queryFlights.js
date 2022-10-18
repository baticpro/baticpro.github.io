const createFormURLEncoded = (data) => {
    const result = [];

    Object.getOwnPropertyNames(data).forEach((name) =>
        result.push(`${name}=${encodeURIComponent(data[name])}`)
    );

    return result.join("&");
};

export const parseBody = (response) => {
    if (response.data) {
        return response.data;
    }

    const contentType = response.headers.get("Content-Type");
    if (contentType) {
        if (contentType.startsWith("application/json")) {
            response.data = response.json();
            return response.data;
        }

        if (contentType.startsWith("text/")) {
            response.data = response.text();
            return response.data;
        }
    }

    return response.blob();
};

const fetchClientToken = () =>
    fetch("https://b.utair.ru/oauth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: createFormURLEncoded({
            client_id: "website_client",
            grant_type: "client_credentials",
        }),
    }).then(parseBody);

export default async function queryFlights(from, to) {
    const token = sessionStorage.getItem("access_token");
    const response = await fetch(
        `https://b.utair.ru/api/v1/flights/available-flight-dates/?departure=${from}&arrival=${to}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": "ru",
                Authorization: `Bearer ${token}`,
            },
        }
    );
    const data = await response.json();

    if (response.status === 401 && data.meta.error_code === 40100) {
        const data = await fetchClientToken();
        sessionStorage.setItem("access_token", data.access_token);
        return queryFlights(from, to);
    } else {
        return data;
    }
}
