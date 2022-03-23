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
        <header>
            <h3>${eatery.businessName}</h3>
        </header>
        <p>${eatery.city}, ${eatery.state}</p>
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