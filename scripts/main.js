import { insertParks } from "./parks/parkDropdown.js"

insertParks()
import { getEateries } from "./eateries/EateryDataManager.js";
import { eateriesDropdownHTML } from "./eateries/EateryDropDown.js";
import { eateriesPreviewHTML } from "./eateries/EateryPreview.js";

getEateries()
.then(eateryData => {
    let eateries = eateryData
    for (const eatery of eateries) {
        eateriesDropdownHTML(eatery)
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
