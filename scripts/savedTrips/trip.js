
// Creates HTML on the DOM for saved trips
export const trip = (tripObj) => {

  return `<section class="trip">
  <h3>${tripObj.trips.stateName}</h3>
  <p>${tripObj.trips.parkName}</p>
  <p>${tripObj.trips.eateryName}</p>
  <p>${tripObj.trips.attractionName}</p>
  </section>`
 }



//  const savedTrip = {
//   stateName: state,
//   parkName: park,
//   eateryName: eatery,
//   attractionName: attraction
// }

// export const insertEntries = () => {
//   getTrips()
//   .then(allTrips => {
//       for (const trip of allTrips){
//           entryLog.innerHTML += trip(trip)
//       }
//   })
// }