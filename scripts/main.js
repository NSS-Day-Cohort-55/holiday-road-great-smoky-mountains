import { insertParks } from "./parks/parkDropdown.js"
import { eateriesPopulate } from "./eateries/EateryDropDown.js";
import { showAttractions } from "./attractions/AttractionDropDown.js"
import { showStates } from "./states/stateDropdown.js"
import { settings } from "./Settings.js"
import { createTrip } from "./savedTrips/savedTripsDataManager.js";
import { savedTripList } from "./savedTrips/TripList.js";
import { getTrips } from "./savedTrips/savedTripsDataManager.js";

const initializeSite = () => {
    showStates()
    showAttractions()
    eateriesPopulate()
}
initializeSite()

document.querySelector(".dropdowns").addEventListener("change", event => {
    if (event.target.id === "filteredStates") {
        insertParks(settings.npsKey + `&stateCode=${event.target.value}`)
    }
})

const showTripList = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".wes-test");
	getTrips().then((allPosts) => {
		postElement.innerHTML = savedTripList(allPosts);
	})
}

document.addEventListener("click", event => {
  if (event.target.id === "save") {
    const state = document.querySelector("state-name-preview")
    const park = document.querySelector("park-name-preview")
    const eatery = document.querySelector("eatery-name-preview")
    const attraction = document.querySelector("attraction-name-preview")

  const savedTrip = {
    stateName: state,
    parkName: park,
    eateryName: eatery,
    attractionName: attraction
  }
  createTrip(savedTrip)
  .then(showTripList)
  }
})


//  applicationElement.addEventListener("click", event => {
//   event.preventDefault();
//   if (event.target.id === "newPost__submit") {
//   //collect the input values into an object to post to the DB
//     const title = document.querySelector("input[name='postTitle']").value
//     const url = document.querySelector("input[name='postURL']").value
//     const description = document.querySelector("textarea[name='postDescription']").value
//     //we have not created a user yet - for now, we will hard code `1`.
//     //we can add the current time as well
//     const postObject = {
//         title: title,
//         imageURL: url,
//         description: description,
//         userId: getLoggedInUser.id,
//         timestamp: Date.now()
//     }
//       createPost(postObject)
//       .then(showPostList)
//       clearEntry()
//   }
// })
