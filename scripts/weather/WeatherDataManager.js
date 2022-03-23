export const getWeather = (link) => {
    return fetch(`${link}`).then(response => response.json())
}

export const fiveDayForecast = (weatherArray) => {
    let splitOne = weatherArray.list[0].dt_txt.split('-')
    let splitt = splitOne[2].split(' ')

    let counterStart = splitt[0]
    let weathers = []
    weatherArray.list.forEach(ele => {
        if (ele.dt_txt.includes(`${splitOne[0]}-${splitOne[1]}-${counterStart}`.toString())) {
            weathers.push(ele)
            counterStart++
        }
    })
    console.log(weathers);

    let dayCounter = 1
    weathers.forEach(weatherObj => {
        document.querySelector("#forecast").innerHTML += `<li>Day ${dayCounter} Temp: ${weatherObj.main.temp}</li>`
        dayCounter++
    })
}

