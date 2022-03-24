import { getStates } from "./stateDataManager.js";

const statePreviewHTML = (state) => {
    return `
    <section>
        <header>
            <h3>${state}</h3>
        </header>
    </section>`
}

export const previewState = (value) => {
    const stateElement = document.querySelector(".statePreview");
    stateElement.innerHTML = statePreviewHTML(value)
}
