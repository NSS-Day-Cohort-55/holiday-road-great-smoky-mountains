// businessName: "string"
// description: "string"
// state: "string"
// city: "string"
// id: integer 
// amenities 
//     wheelchairAccessible: boolean
//     petFriendly: boolean
//     wifi: boolean
//     diaperFacility: boolean
//     playground: boolean
//     restrooms: boolean

import { getEateries } from "./EateryDataManager.js"

const eateriesPreviewHTML = (eatery) => {
    return `
    <section>
        <h3>${eatery.businessName}</h3>
        <p>${eatery.city}, ${eatery.state}</p>
        <button id="eatery-details">details</button>
    </section>`
}

export const previewEatery = (index) => {
    let selectedEatery = {}
    const eateryElement = document.querySelector(".eateryPreview");
    getEateries().then((data) => {
        selectedEatery = data[index - 1]
        eateryElement.innerHTML = eateriesPreviewHTML(selectedEatery)
    })
} 