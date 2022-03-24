import { getTrips } from "./savedTripsDataManager.js"
// Creates HTML on the DOM for saved trips
export const tripHTML = (tripObj) => {
  return `<section class="trip">
  <h3>${tripObj.stateName}</h3>
  <p>${tripObj.parkName}</p>
  <p>${tripObj.eateryName}</p>
  <p>${tripObj.attractionName}</p>
  </section>
  <hr style="width:50%", size="3", color=black>  `
 }

//  const savedTrip = {
//   stateName: state,
//   parkName: park,
//   eateryName: eatery,
//   attractionName: attraction
// }