export const getWeather = (weatherKey) => {
    return fetch(`${weatherKey}`).then(response => response.json())
}
