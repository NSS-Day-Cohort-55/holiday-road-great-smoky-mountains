import { insertParks } from "./parks/parkDropdown.js"
import { eateriesPopulate } from "./eateries/EateryDropDown.js";
import { showAttractions } from "./attractions/AttractionDropDown.js"
import { showStates } from "./states/stateDropdown.js"
import { settings } from "./Settings.js"
import {getParks} from "./parks/ParkDataManager.js"
import { previewEatery } from "./eateries/EateryPreview.js"
import { previewAttraction } from "./attractions/AttractionPreview.js";
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

// document.querySelector(".dropdowns").addEventListener("change", event => {
//     if (event.target.id === "filteredParks") {
//         let selectedIndex = event.target.selectedIndex;
//         previewParks(selectedIndex)
//     }
    
// })
