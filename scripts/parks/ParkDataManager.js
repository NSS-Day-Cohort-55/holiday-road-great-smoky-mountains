export const getParks = (link) => {
    return fetch(`${link}`).then(response => response.json())
}

