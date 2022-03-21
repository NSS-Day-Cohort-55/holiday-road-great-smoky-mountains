import { getStates } from "./stateDataManager.js";
    
const statesDropdownHTML = (state) => {
     document.querySelector("select").insertAdjacentHTML("afterbegin", `<option value="${state.abbreviation}">${state.name}</option>`)
}

getStates()
.then(statesData => {
    for (const state of statesData.states) {
        statesDropdownHTML(state)
    }
})