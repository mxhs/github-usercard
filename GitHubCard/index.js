import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// axios.get('https://api.github.com/users/mxhs')
  

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/



/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

const followersArray = ["tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"];

axios
  .get('https://api.github.com/users/mxhs')
  .then(res =>{
    // debugger
    const userData = res.data
    cardPlacement.append(cardMaker(userData))
  })
  .catch(err =>{
    console.log(err)
  })

  followersArray.forEach(item =>{
    axios
      .get(`https://api.github.com/users/${item}`)
      .then(res =>{
        const followerData = res.data
        cardPlacement.append(cardMaker(followerData))
      })
      .catch(err =>{
        console.log(err)
      })
  })

  const cardPlacement = document.querySelector('.cards')
  

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// followersArray.forEach(data =>{
//   let userInfo = 
// })



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(object){

  //Instantiate Elements
  const newCard = document.createElement('div')
  const profileImage = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profileString = document.createElement('p')
  const profURL = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  //Add Class Names
  newCard.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  username.classList.add('username')

  //Add Attributes
  profileImage.src = object.avatar_url
  name.textContent = object.name
  username.textContent = object.login
  location.textContent = `Location: ${object.location}`
  profileString.textContent = "Profile: "
  profURL.href = object.html_url
  profURL.textContent = object.html_url
  followers.textContent = `Followers: ${object.followers}`
  following.textContent = `Following: ${object.following}`
  bio.textContent = `Bio: ${object.bio}`

  //Structure Setup
  newCard.append(profileImage, cardInfo)
  cardInfo.append(name, username, location, profileString, followers, following, bio)
  profileString.append(profURL)

return newCard
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
