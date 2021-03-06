// "id": 1,
// "name": "Big White Shirt",
// "state": "AL",
// "city": "Andalusia",
// "description": "Andalusia, Alabama, is the white dress-shirt capital of America, and this highly photographed enormous white shirt sign is a reminder of that. According to Roadside America, the tie is changed seasonally.",
// "ameneties": {
//     "souvenirs": false,
//     "restrooms": false
// }

import { getAttractions } from "./AttractionDataManager.js"

const attractionPreviewHTML = (attraction) => {
  return `
  <section class="test">
      <header>
          <h3>${attraction.name}</h3>
      </header>
      <p>${attraction.city}, ${attraction.state}</p>
      <button id="attraction-details">details</button>
  </section>
  `

}

export const previewAttraction = (index) => {
  let selectedAttraction = {}
  const attractionElement = document.querySelector(".bizarrePreview");
  getAttractions().then((data) => {
      selectedAttraction = data[index - 1]
      attractionElement.innerHTML = attractionPreviewHTML(selectedAttraction)
  })
} 