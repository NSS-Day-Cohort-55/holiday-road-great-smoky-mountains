import { getAttractions } from "../attractions/AttractionDataManager.js"
import { getEateries } from "../eateries/EateryDataManager.js"
import { getStates } from "../states/stateDataManager.js"
import { getParks } from "../parks/ParkDataManager.js"



// Populates Saved Trips box with State Name, Park Name, Eatery Name,  Attraction Name 

export const savedTripObj = () => { 
  const state = document.querySelector("state-name-preview").value
  const park = document.querySelector("park-name-preview").value
  const eatery = document.querySelector("eatery-name-preview").value
  const attraction = document.querySelector("attraction-name-preview").value

  const savedTrip = {
    stateName: state,
    parkName: park,
    eateryName: eatery,
    attractionName: attraction
  }
  return savedTrip
}

mainElement.addEventListener("click", event => {
  if (event.target.id === "save-trip-button")
  savedTripObj()
  .then
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

// const showPostList = () => {
// 	//Get a reference to the location on the DOM where the list will display
// 	// const postElement = document.querySelector(".postList");
// 	getPosts().then((allPosts) => {
// 		postElement.innerHTML = PostList(allPosts);
// 	})
// }

// export const PostList = (allPosts) => {
// 	let postHTML = "";
// 		//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
// 		for (const postObject of allPosts) {
// 			//what is a postObject?
// 			postHTML += Post(postObject)
// 		}
// 		return postHTML;
	
// }


