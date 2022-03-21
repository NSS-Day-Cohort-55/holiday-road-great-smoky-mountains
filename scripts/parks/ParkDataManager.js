export const getParks = () => {
    return fetch('https://developer.nps.gov/api/v1/parks?api_key=e9x5IURoMr69URHU2hozGVx5U5QRhcKmvsuU5OAq&limit=465&_order=aesc').then(response => response.json())
}

