import { getStates } from "./stateDataManager.js";
    
const statesDropdownHTML = (state) => {
     document.querySelector("#filteredStates").insertAdjacentHTML("beforeend", `<option value="${state.abbreviation}">${state.name}</option>`)
}

export const showStates = () =>{
    getStates()
.then(statesData => {
    for (const state of statesData.states) {
        statesDropdownHTML(state)
    }
})
}
