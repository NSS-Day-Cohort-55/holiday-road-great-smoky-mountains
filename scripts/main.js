import { insertParks } from "./parks/parkDropdown.js"
import { eateriesPopulate } from "./eateries/EateryDropDown.js";
import { showAttractions } from "./attractions/AttractionDropDown.js"
import { showStates } from "./states/stateDropdown.js"
import { settings } from "./Settings.js"
import { getParks } from "./parks/ParkDataManager.js"
import { previewEatery } from "./eateries/EateryPreview.js"
import { previewAttraction } from "./attractions/AttractionPreview.js";
import { createTrip, getTrips } from "./savedTrips/savedTripsDataManager.js";
import { tripHTML } from "./savedTrips/trip.js";
import { previewState } from "./states/statePreview.js";
import { previewPark } from "./parks/parksPreview.js";
import {getEateries} from "./eateries/EateryDataManager.js"
import {getAttractions} from "./attractions/AttractionDataManager.js"

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

document.querySelector(".tripPreview").addEventListener("click", event => {
    if (event.target.id === "park-details") {   
        getParks(settings.npsKey + `&stateCode=${document.querySelector("#filteredStates").value}`)
            .then(parks => {
                let chosenPark = document.querySelector("#filteredParks").value
                let foundPark = parks.data.find(o => o.fullName === chosenPark)
                document.querySelector(".details-box").innerHTML = 
                `
                Address: ${foundPark.addresses[0].postalCode}, ${foundPark.addresses[0].line1}, 
                \n ${foundPark.addresses[0].city}, ${foundPark.addresses[0].stateCode} \n
                Phone Number ${foundPark.contacts.phoneNumbers[0].phoneNumber} \n
                ${foundPark.description}
                `
            })
    }

    if (event.target.id === "eatery-details"){   
        getEateries()
            .then(eateries => {
                let chosenEatery = document.querySelector("#eateryDD").value
                let foundEatery = eateries.find(o => o.businessName === chosenEatery)
                document.querySelector(".details-box").innerHTML = 
                `
                City: ${foundEatery.city} \n
                State: ${foundEatery.state} \n
                ${foundEatery.description}
                `
            })
    }

    if (event.target.id === "attraction-details"){   
        getAttractions()
            .then(attractions => {
                let chosenAttraction = document.querySelector("#attractionsDD").value
                let foundAttraction = attractions.find(o => o.name === chosenAttraction)
                document.querySelector(".details-box").innerHTML = 
                `
                City: ${foundAttraction.city} \n
                State: ${foundAttraction.state} \n
                ${foundAttraction.description}
                ${foundAttraction.ameneties.souvenirs ? `Souvenirs are available for purchase.` : ''}
                ${foundAttraction.ameneties.restrooms ? `Public restrooms are available.` : ''}
                `
            })
    }
})