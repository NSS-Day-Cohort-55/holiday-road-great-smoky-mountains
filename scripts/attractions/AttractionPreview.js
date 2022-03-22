export const attractionPreviewHTML = (attraction) => { 
  return `<section class="attractions">
  <h2 class="attractionName">${attraction.name}</h2>
  <p class="attractionLocation">${attraction.city}, ${attraction.state}</p>
  <p class="attractionDescription">${attraction.description}</p>`
}

// "id": 1,
// "name": "Big White Shirt",
// "state": "AL",
// "city": "Andalusia",
// "description": "Andalusia, Alabama, is the white dress-shirt capital of America, and this highly photographed enormous white shirt sign is a reminder of that. According to Roadside America, the tie is changed seasonally.",
// "ameneties": {
//     "souvenirs": false,
//     "restrooms": false
// }
