import { insertParks } from "./parks/parkDropdown.js";
import { eateriesPopulate } from "./eateries/EateryDropDown.js";
import { showAttractions } from "./attractions/AttractionDropDown.js";
import { showStates } from "./states/stateDropdown.js";
import { settings } from "./Settings.js";
import { previewEatery } from "./eateries/EateryPreview.js";
import {getParks} from "./parks/ParkDataManager.js";
import { previewAttraction } from "./attractions/AttractionPreview.js";
import { previewState } from "./states/statePreview.js";
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
