export const getAttractions = () => { 
  return fetch("http://holidayroad.nss.team/bizarreries")
  .then(response => response.json())
  .then(parsedResponse => {
    // attractions = parsedResponse
    return parsedResponse
  } )
}


// let attractions = []
// export const useAttractions = () => { 
//   return [...attractions]
//  }

 // checks to see if correct data is fetched
// getAttractions().then(response => {
//   console.log(response)
// })

 