import {settings} from "../Settings.js"
export const getParks = () => {
    return fetch(settings.npsKey).then(response => response.json())
}

