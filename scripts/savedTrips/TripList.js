import { trip } from "./trip.js";

export const savedTripList = (allTrips) => { 
  let tripHTML = ''
  
  for (const tripObj of allTrips) { 
    tripHTML += trip(tripObj)
   }
 }