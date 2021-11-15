/**
 * send POST request
 * @param body
 * @param headers
 * @returns
 */
export const httpPost = async <T>(
    url: string,
    body: Object,
    headers?: Headers
) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: Object.assign(
            { 'content-type': 'application/json' },
            headers || {}
        ),
        body: JSON.stringify(body)
    });

    return (await res.json()) as T;
};
