import { insertParks } from "./parks/parkDropdown.js"
import { eateriesPopulate } from "./eateries/EateryDropDown.js";
import { showAttractions } from "./attractions/AttractionDropDown.js"
import { showStates } from "./states/stateDropdown.js"
import { settings } from "./Settings.js"
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
})

// const showEteriesPreviewHTML = () => {
// 	//Get a reference to the location on the DOM where the list will display
// 	const eateryElement = document.querySelector("#eateryPreview");
//     getEateries().then((data) => {
//         eateryElement.innerHTML = eateriesPreviewHTML(data)
//     })
// }

// showEteriesPreviewHTML()
