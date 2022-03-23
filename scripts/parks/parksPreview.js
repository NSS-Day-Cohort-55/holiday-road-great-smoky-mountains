
const parksPreviewHTML = (parks) => {
    return `
    <section>
        <header>
            <h3>${parks}</h3>
            <button id="park-details">details</button>
        </header>
    </section>`
}

export const previewPark = (value) => {
    const parkElement = document.querySelector(".parkPreview");
    parkElement.innerHTML = parksPreviewHTML(value)
}

