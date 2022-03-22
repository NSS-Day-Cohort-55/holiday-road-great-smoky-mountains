import { insertParks } from "./parks/parkDropdown.js"
import { eateriesPopulate } from "./eateries/EateryDropDown.js";
import { showAttractions } from "./attractions/AttractionDropDown.js"
import { showStates } from "./states/stateDropdown.js"
import { settings } from "./Settings.js"
import { previewEatery } from "./eateries/EateryPreview.js"
import { previewAttraction } from "./attractions/AttractionPreview.js";
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
        // let selectedIndex = event.target.selectedIndex;
        // previewState(selectedIndex)
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
