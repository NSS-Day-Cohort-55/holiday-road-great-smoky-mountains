import {settings} from "../Settings.js"

export const getAttractions = () => { 
  return fetch(settings.bizzare)
  .then(response => response.json())
  .then(parsedResponse => {
    // attractions = parsedResponse
    return parsedResponse
  } )
}

 