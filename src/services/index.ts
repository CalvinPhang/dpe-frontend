const BASE_URL = process.env.BASE_URL

export async function fetchInventoryContainers() {
    const headers = {};

    const response = await fetch(BASE_URL + '/api/v1/containers?ordering=-id&search_fields=is_sold&search=0', {
        headers: headers,
        cache: 'no-store'
    });

    const result = await response.json();

    return result;
}

export async function fetchSoldContainers() {
    const headers = {};

    const response = await fetch(BASE_URL + '/api/v1/containers?ordering=-id&search_fields=is_sold&search=1', {
        headers: headers,
        cache: 'no-store'
    });

    const result = await response.json();

    return result;
}

export async function fetchContainerTypes() {
    const headers = {};
    const response = await fetch(BASE_URL + '/api/v1/container-types', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}

export async function fetchContainerConditions() {
    const headers = {};
    const response = await fetch(BASE_URL + '/api/v1/container-conditions', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}

export async function fetchSuppliers() {
    const headers = {};
    const response = await fetch(BASE_URL + '/api/v1/suppliers', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}