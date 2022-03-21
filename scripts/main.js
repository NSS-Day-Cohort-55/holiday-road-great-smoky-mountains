import { insertParks } from "./parks/parkDropdown.js"
import { getEateries } from "./eateries/EateryDataManager.js";
import { eateriesDropdownHTML } from "./eateries/EateryDropDown.js";
import { eateriesPreviewHTML } from "./eateries/EateryPreview.js";
import { showAttractions } from "./attractions/AttractionDropDown.js";
import { showStates} from   "./states/stateDropdown.js";



showStates()
showAttractions()
insertParks()
getEateries()
.then(eateryData => {
    let eateries = eateryData
    for (const eatery of eateries) {
        eateriesDropdownHTML(eatery)
    }
})

const showEateriesPreviewHTML = () => {
	const eateryElement = document.querySelector("#eateryPreview");
    getEateries().then((data) => {
        for (const entry of data)
        eateryElement.innerHTML += eateriesPreviewHTML(entry)
    })
}

showEateriesPreviewHTML()
