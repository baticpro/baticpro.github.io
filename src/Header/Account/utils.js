export const createFormURLEncoded = (data) => {
    const result = [];

    Object.getOwnPropertyNames(data).forEach((name) =>
        result.push(`${name}=${encodeURIComponent(data[name])}`)
    );

    return result.join("&");
};
