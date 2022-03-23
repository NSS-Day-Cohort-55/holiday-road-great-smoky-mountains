import { tripHTML } from "./trip.js";

export const savedTripList = (tripArr) => { 
  let tripHTMLEl = ''
  for (const trip of tripArr) { 
    tripHTMLEl += tripHTML(trip)
   }
   return tripHTMLEl
 }