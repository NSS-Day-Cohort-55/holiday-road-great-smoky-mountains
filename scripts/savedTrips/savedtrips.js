import { getAttractions } from "../attractions/AttractionDataManager.js"
import { getEateries } from "../eateries/EateryDataManager.js"
import { getStates } from "../states/stateDataManager.js"
import { getParks } from "../parks/ParkDataManager.js"



// Populates Saved Trips box with State Name, Park Name/Details, Eatery Name / Details, Attraction Name / details

export const savedTripsHTML = (park, eatery, attractions) => { 
  const parks = getParks()
  const eateries = getEateries()
  const attractions = getAttractions()
  return `section`

 }

//  export const attractionPreviewHTML = (attraction) => { 
//   return `<section class="attractions">
//   <h2 class="attractionName">${attraction.name}</h2>
//   <p class="attractionLocation">${attraction.city}, ${attraction.state}</p>
//   <p class="attractionDescription">${attraction.description}</p>`
// }


