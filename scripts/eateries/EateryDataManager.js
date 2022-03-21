import {settings} from "../Settings.js"
export const getEateries = () => {
    return fetch(settings.eateries)
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;
    })
}
