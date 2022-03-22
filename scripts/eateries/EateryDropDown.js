import {getEateries} from "./EateryDataManager.js"

const eateriesDropdownHTML = (eatery) => {
    return document.querySelector("#eateryDD").insertAdjacentHTML("beforeend", `<option value="${eatery.id}">${eatery.businessName}</option>`)
}

export const eateriesPopulate = () => {
    getEateries()
.then(eateryData => {
    let eateries = eateryData
    for (const eatery of eateries) {
        eateriesDropdownHTML(eatery)
    }
})
}