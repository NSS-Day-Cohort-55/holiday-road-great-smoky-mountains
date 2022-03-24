


export const previewWeather = (value) => {
    const weatherElement = document.querySelector(".weatherPreview");
    weatherElement.innerHTML = weatherPreviewHTML(value)
}

