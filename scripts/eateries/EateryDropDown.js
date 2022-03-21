export const eateriesDropdownHTML = (eatery) => {
    return document.querySelector("select").insertAdjacentHTML("beforeend", `<option value="${eatery.id}">${eatery.businessName}</option>`)
}