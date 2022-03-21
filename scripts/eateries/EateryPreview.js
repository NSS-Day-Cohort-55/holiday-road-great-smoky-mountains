// businessName: "string"
// description: "string"
// state: "string"
// city: "string"
// id: integer 
// amenities 
//     wheelchairAccessible: boolean
//     petFriendly: boolean
//     wifi: boolan
//     diaperFacility: boolean
//     playground: boolean
//     restrooms: boolean

export const eateriesPreviewHTML = (eatery) => {
    return `
    <section class="eatery">
        <header>
            <h2 class="post__title">${eatery.businessName}</h2>
        </header>
        <p>${eatery.description}</p>
        <p>${eatery.city}, ${eatery.state}</p>
    </section>`
}
    
//         <p>${eatery.amenities.wheelchairAccessible}, ${eatery.amenities.petFriendly}, ${eatery.amenities.wifi}, ${eatery.amenities.diaperFacility}, ${eatery.amenities.playground}, ${eatery.amenities.restroom}</p>

