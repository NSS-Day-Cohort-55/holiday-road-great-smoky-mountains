import {settings} from "../Settings.js"

export const getAttractions = () => { 
  return fetch(settings.bizarre)
  .then(response => response.json())
  .then(parsedResponse => {
    // attractions = parsedResponse
    return parsedResponse
  } )
}

 