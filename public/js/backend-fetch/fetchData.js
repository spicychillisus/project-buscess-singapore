// Purpose: Fetch the user data from the backend and display it on the frontend
//import liveServer from "./getURL";

const liveServer = window.location.protocol + '//' + window.location.host
console.log(liveServer);

const userID = localStorage.getItem("user_id");

function fetchUserData() {
    fetch(`${liveServer}/api/users/${userID}`)
        .then(response => response.json())
        .then(data => {
            // Display the user data on the frontend
            console.log(data); // Replace this with your code to display the data
        })
        .catch(error => {
            // Handle any errors that occur during the fetch request
            console.error(error);
        });
}

fetchUserData()

export default fetchUserData;