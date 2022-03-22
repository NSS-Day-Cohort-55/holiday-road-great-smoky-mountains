import { insertParks } from "./parks/parkDropdown.js"
import { eateriesPopulate } from "./eateries/EateryDropDown.js";
import { showAttractions } from "./attractions/AttractionDropDown.js"
import { showStates } from "./states/stateDropdown.js"
import { settings } from "./Settings.js"
import {getParks} from "./parks/ParkDataManager.js"
import { previewEatery } from "./eateries/EateryPreview.js"
import { previewAttraction } from "./attractions/AttractionPreview.js";
import { createTrip, getTrips } from "./savedTrips/savedTripsDataManager.js";
import { savedTripList } from "./savedTrips/TripList.js";
// import { previewState } from "./states/statePreview.js";
// import { previewParks } from "./parks/parksPreview.js";

const initializeSite = () => {
    showStates()
    showAttractions()
    eateriesPopulate()
}
initializeSite()

document.querySelector(".dropdowns").addEventListener("change", event => {
    if (event.target.id === "filteredStates") {
        insertParks(settings.npsKey + `&stateCode=${event.target.value}`)
    }

    if (event.target.id === "filteredParks") {
        getParks(settings.npsKey + `&stateCode=${document.querySelector("#filteredStates").value}`)
        .then(parks => {
            let result = parks.data.find(o => o.fullName === event.target.value)
            document.querySelector("body").classList.add("background-image")
            document.querySelector("body").style.backgroundImage = `url(${result.images[0].url})`
        })
    }  
})
        // let selectedIndex = event.target.selectedIndex;
        // previewState(selectedIndex)

document.querySelector(".dropdowns").addEventListener("change", event => {
    if (event.target.id === "eateryDD") {
        let selectedIndex = event.target.selectedIndex;
        previewEatery(selectedIndex)
    }
    
})

// showEteriesPreviewHTML()
// document.querySelector(".preview").addEventListener("onclick", event => {
//     if (event.target.id === "eatery-preview"){
//         document.querySelector(".details-box").innerHTML = ``
//     }
// })

document.querySelector(".dropdowns").addEventListener("change", event => {
    if (event.target.id === "attractionsDD") {
        let selectedIndex = event.target.selectedIndex;
        previewAttraction(selectedIndex)
    }
    
})

// document.querySelector(".dropdowns").addEventListener("change", event => {
//     if (event.target.id === "filteredParks") {
//         let selectedIndex = event.target.selectedIndex;
//         previewParks(selectedIndex)
//     }
    
// })

const showTripList = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".savedTrips");
	getTrips().then((allTrips) => {
		postElement.innerHTML = savedTripList(allTrips);
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
      createTrip(savedTrip)
      .then(showTripList)
  }
})
