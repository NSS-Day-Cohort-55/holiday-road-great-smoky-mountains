// import { getParks } from "./ParkDataManager.js";

// const parksPreviewHTML = (parks) => {
//     return `
//     <section>
//         <header>
//             <h2 class=>${parks.fullName}</h2>
//         </header>
//         <p>${parks.addresses.city}, ${parks.addresses.stateCode}</p>
//     </section>`
// }

// export const previewParks = (index) => {
//     let selectedPark = {}
//     const parkElement = document.querySelector(".parkPreview");
//     getParks().then((data) => {
//         selectedPark = data[index - 1]
//         parkElement.innerHTML = parksPreviewHTML(selectedPark)
//     })
// } 