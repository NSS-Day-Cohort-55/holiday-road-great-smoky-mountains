import { getAttractions } from "./AttractionDataManager.js"

const attractionsDropdownHTML = (attraction) => {
  document.querySelector("#attractionsDD").insertAdjacentHTML("beforeend", `<option value="${attraction.name}">${attraction.name}</option>`)
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

