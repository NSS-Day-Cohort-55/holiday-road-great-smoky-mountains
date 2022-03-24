
const parksPreviewHTML = (parks) => {
    return `
    <section class="test">
        <header>
            <h3>${parks}</h3>
        </header>
        <section>
            <h4>5 Day Forecast:</h4>
            <ul id="forecast">

            </ul>
        </section>
        <button id="park-details">details</button>
    </section>
    `
}

export const previewPark = (value) => {
    const parkElement = document.querySelector(".parkPreview");
    parkElement.innerHTML = parksPreviewHTML(value)
}

