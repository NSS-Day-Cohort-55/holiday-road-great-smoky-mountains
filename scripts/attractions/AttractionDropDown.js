import { getAttractions } from "./AttractionDataManager.js"

const attractionsDropdownHTML = (attraction) => {
  document.querySelector("#attractionsDrop").insertAdjacentHTML("afterbegin", `<option value="${attraction.name}">${attraction.name}</option>`)
}
export const showAttractions = () => {
getAttractions()
.then(attractionData => {
  let attractions = attractionData
  for (const attraction of attractions) {
      attractionsDropdownHTML(attraction)
  }
})
}

// iterates attractions to grab names and make option html tags for select menu
// ask instructor why this doesn't work

// export const getAttractionNames = () => {
//   const attractionEl = document.querySelector(".attractionBox")
//   getAttractions().then(attractionData => {
//     let attractions = attractionData
//     for (const attraction of attractions) {
//     return `<option value="${attraction.name} id="${attraction.city}">${attraction.name}</option>`
//      }
//   })

// // }

// export const getAttractionNames = () => {
// getAttractions.then(attractionData => {
//   let attractions = attractionData 
//   for (const attraction of attractions) {
//     return `<option value="${attraction.name} id="${attraction.city}">${attraction.name}</option>`
//   }
// })
// }

