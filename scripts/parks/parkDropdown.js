import {getParks} from "./ParkDataManager.js"

// document.querySelector(".dropdown-menus").addEventListener("change", event => {
//     const filteredParks = []
//     if (event.target.id === "state-dropdown"){
//         getParks().then(data => {
//             filteredParks = data.filter(singlePark => {
//                 if (singlePark.states.includes(event.target.value)){
//                     return singlePark
//                 }
//             })
//             for (const park of filteredParks){
//                 parksDropdownHTML(park)
//             }
//         })
//         console.log(filteredPars);
//     }
// })

const parksDropdownHTML = (park) => {
    document.querySelector("#filteredParks").insertAdjacentHTML("beforeend", `<option value="${park.parkCode}">${park.fullName}</option>`)
}

export const insertParks = () => {
    getParks()
.then(parksData => {
    for (const park of parksData.data) {
        parksDropdownHTML(park)
    }
})
}

