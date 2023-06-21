const BASE_URL = 'http://localhost:8000'

export async function fetchContainers() {
    const headers = {};

    const response = await fetch(BASE_URL + '/api/v1/containers', {
        headers: headers,
        next: { revalidate: 1 }
    });

    const result = await response.json();

    return result;
}