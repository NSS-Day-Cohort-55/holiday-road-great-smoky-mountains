export const createTrip = (tripObj) => { 
  return fetch("http://localhost:8088/trips", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(tripObj)

})
    .then(response => response.json())
}

let trips = []

export const getTrips = () => {
  return fetch("http://localhost:8088/trips")
    .then(response => response.json())
    .then(parsedResponse => {
      trips = parsedResponse
      return parsedResponse;
    })
}
