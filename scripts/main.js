import { insertParks } from "./parks/parkDropdown.js";
import { eateriesPopulate } from "./eateries/EateryDropDown.js";
import { showAttractions } from "./attractions/AttractionDropDown.js";
import { showStates } from "./states/stateDropdown.js";
import { settings } from "./Settings.js";
import { previewEatery } from "./eateries/EateryPreview.js";
import {getParks} from "./parks/ParkDataManager.js";
import { previewAttraction } from "./attractions/AttractionPreview.js";
import { createTrip, getTrips } from "./savedTrips/savedTripsDataManager.js";
import { tripHTML } from "./savedTrips/trip.js";
import { previewState } from "./states/statePreview.js";
import { previewPark } from "./parks/parksPreview.js";

const initializeSite = () => {
    showStates()
    showAttractions()
    eateriesPopulate()
}
initializeSite()

document.querySelector(".dropdowns").addEventListener("change", event => {
    if (event.target.id === "filteredStates") {
        let selectedState = event.target.value;
        previewState(selectedState)
        insertParks(settings.npsKey + `&stateCode=${event.target.value}`)
    }
    

    if (event.target.id === "filteredParks") {
        getParks(settings.npsKey + `&stateCode=${document.querySelector("#filteredStates").value}`)
        .then(parks => {
            let selectedPark = event.target.value;
            previewPark(selectedPark)
            let result = parks.data.find(o => o.fullName === event.target.value)
            document.querySelector("body").classList.add("background-image")
            document.querySelector("body").style.backgroundImage = `url(${result.images[0].url})`
        })
    }  
})

document.querySelector(".dropdowns").addEventListener("change", event => {
    if (event.target.id === "eateryDD") {
        let selectedIndex = event.target.selectedIndex;
        previewEatery(selectedIndex)
    }
    
})


document.querySelector(".dropdowns").addEventListener("change", event => {
    if (event.target.id === "attractionsDD") {
        let selectedIndex = event.target.selectedIndex;
        previewAttraction(selectedIndex)
    }
    
})

export const insertTrips = () => {
  const savedTripsEl = document.querySelector(".savedTrips")
  savedTripsEl.innerHTML = ''
  getTrips()
  .then(allTrips => {
      for (const trip of allTrips) {
          savedTripsEl.innerHTML += tripHTML(trip)
      }
  })
}

// Populates Saved Trips div with State Name, Park Name, Eatery Name,  Attraction Name upon save click

document.querySelector("#previewBox").addEventListener("click", event => {
  if (event.target.id === "saveButton") {
    const state = document.querySelector(".statePreview").innerText
    const park = document.querySelector(".parkPreview").innerText
    const eatery = document.querySelector(".eateryPreview").innerText
    const attraction = document.querySelector(".bizarrePreview").innerText
    console.log(eatery); // Checks to see if correct value is grabbed
  
    const savedTrip = {
      stateName: state,
      parkName: park,
      eateryName: eatery,
      attractionName: attraction
    }
    // console.log(savedTrip.eateryName);
      createTrip(savedTrip).then(insertTrips)
  }
})
