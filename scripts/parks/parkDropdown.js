import { getParks } from "./ParkDataManager.js"


const parksDropdownHTML = (parksData) => {
    document.querySelector(".parksBox").innerHTML = `<select name="filteredParks" id="filteredParks">
    <option value="">-- Select a Park --</option>
  </select>`
    for (const park of parksData.data) {
        document.querySelector("#filteredParks").insertAdjacentHTML("beforeend", `<option>${park.fullName}</option>`)
    }
}

export const insertParks = (link) => {
    getParks(link)
        .then(parksData => {
            parksDropdownHTML(parksData)
        })
}

