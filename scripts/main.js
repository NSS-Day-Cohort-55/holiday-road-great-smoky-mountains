import { insertParks } from "./parks/parkDropdown.js"
import { getEateries } from "./eateries/EateryDataManager.js";
import { eateriesDropdownHTML } from "./eateries/EateryDropDown.js";
import { showAttractions } from "./attractions/AttractionDropDown.js"
import {showStates} from "./states/stateDropdown.js"
import { getAttractions } from "./attractions/AttractionDataManager.js";
import {attractionPreviewHTML} from "./attractions/AttractionPreview.js";

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

const showEteriesPreviewHTML = () => {
	//Get a reference to the location on the DOM where the list will display
	const eateryElement = document.querySelector("#eateryPreview");
    getEateries().then((data) => {
      for (const entry of data) {
        eateryElement.innerHTML = eateriesPreviewHTML(entry)
      }
    })
}

const showAttractionsPreviewHTML = () => {
	//Get a reference to the location on the DOM where the list will display
	const attractionElement = document.querySelector("#yaya");
    getAttractions().then((data) => {
      for (const entry of data) {
        attractionElement.innerHTML += attractionPreviewHTML(entry)
      }
    })
}

showEteriesPreviewHTML()
showAttractionsPreviewHTML()
