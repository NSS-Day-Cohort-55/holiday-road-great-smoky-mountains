import { insertParks } from "./parks/parkDropdown.js"
import { eateriesPopulate } from "./eateries/EateryDropDown.js";
import { showAttractions } from "./attractions/AttractionDropDown.js"
import { showStates } from "./states/stateDropdown.js"
import { settings } from "./Settings.js"
import {getParks} from "./parks/ParkDataManager.js"
const initializeSite = () => {
    showStates()
    showAttractions()
    eateriesPopulate()
}
initializeSite()

document.querySelector(".dropdowns").addEventListener("change", event => {
    let chosenState = ""
    if (event.target.id === "filteredStates") {
        chosenState = event.target.value
        insertParks(settings.npsKey + `&stateCode=${event.target.value}`)
        if (event.target.id === "filteredParks"){
            console.log(chosenState);
            getParks(settings.npsKey + `&stateCode=${chosenState}`)
            .then(data => data)
        }
    }

    
})

// const showEteriesPreviewHTML = () => {
// 	//Get a reference to the location on the DOM where the list will display
// 	const eateryElement = document.querySelector("#eateryPreview");
//     getEateries().then((data) => {
//         eateryElement.innerHTML = eateriesPreviewHTML(data)
//     })
// }

// showEteriesPreviewHTML()
// document.querySelector(".preview").addEventListener("onclick", event => {
//     if (event.target.id === "eatery-preview"){
//         document.querySelector(".details-box").innerHTML = ``
//     }
// })

