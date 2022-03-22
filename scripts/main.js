import { insertParks } from "./parks/parkDropdown.js"
import { eateriesPopulate } from "./eateries/EateryDropDown.js";
import { showAttractions } from "./attractions/AttractionDropDown.js"
import { showStates } from "./states/stateDropdown.js"
import { settings } from "./Settings.js"
import { showEateriesPreviewHTML } from "./eateries/EateryPreview.js"
import { showAttractionsPreviewHTML } from "./attractions/AttractionPreview.js";

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

showEateriesPreviewHTML()
showAttractionsPreviewHTML()
