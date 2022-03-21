export const eateriesDropdownHTML = (eatery) => {
    return document.querySelector("#eateryDD").insertAdjacentHTML("beforeend", `<option value="${eatery.id}">${eatery.businessName}</option>`)
}