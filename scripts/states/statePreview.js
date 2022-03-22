import { getStates } from "./stateDataManager.js";


const statePreviewHTML = (state) => {
    return `
    <section>
        <header>
            <h2>${state.name}</h2>
        </header>
    </section>`
}

export const previewState = (index) => {
    let selectedState = {}
    const stateElement = document.querySelector(".statePreview");
    getStates().then((data) => {
        selectedState = data[index - 1]
        stateElement.innerHTML = statePreviewHTML(selectedAttraction)
    })
} 