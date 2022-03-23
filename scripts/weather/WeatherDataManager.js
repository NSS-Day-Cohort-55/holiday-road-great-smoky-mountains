export const getWeatherForecast = (weatherKey) => {
    return fetch(`${weatherKey}`).
    then(response => response.json())
}


// fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York%20City%2CNY?unitGroup=us&key=YOUR_API_KEY&contentType=json", {
//   method: 'GET', 
//   headers: {
 
//   },
           
// }).then(response => {
//   if (!response.ok) {
//     throw response; //check the http response code and if isn't ok then throw the response as an error
//   }
            
//   return response.json(); //parse the result as JSON

// }).then(response => {
//   //response now contains parsed JSON ready for use
//   processWeatherData(response);

// }).catch((errorResponse) => {
//   if (errorResponse.text) { //additional error information
//     errorResponse.text().then( errorMessage => {
//       //errorMessage now returns the response body which includes the full error message
//     })
//   } else {
//     //no additional error information 
//   } 
// });