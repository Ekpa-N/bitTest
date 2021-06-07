
// importing variables

import * as newModules from './domElements.js'

// github frustrations.

// function that populates the user data area  
function dataTest (data) {
  const {avatarUrl, bio, bioHtml, login, name, repositories} = data
  newModules.userAvatar.setAttribute('src',avatarUrl);
  newModules.repoNavImage.setAttribute('src',avatarUrl);
  newModules.userName.textContent = name;
  newModules.userLogin.textContent = login;
  newModules.navLeftId.textContent = login;
  newModules.userBio.textContent = bio;
  newModules.repoCount.textContent = `${repositories.nodes.length} repos found`
}

// function that populates the repository area
function repoDetails (array,userId, reposArray, languageColourArray, languagesArray,
  starsArray, forksArray, updatesArray, ParentDivArray, 
  repoNavArray) {
array.forEach((rn, idx) => {
  reposArray[idx].textContent = rn.name;
  languageColourArray[idx].style.backgroundColor = rn.primaryLanguage.color
  languagesArray[idx].textContent = rn.primaryLanguage.name;
  starsArray[idx].textContent = rn.stargazerCount;
  forksArray[idx].textContent = rn.forkCount;
  updatesArray[idx].textContent = rn.updatedAt
  reposArray[idx].setAttribute('href', `https://github.com/${userId}/${reposArray[idx].textContent}`)
  ParentDivArray[idx].classList.remove('no-display')    
})
repoNavArray.forEach(repo => {
  repo.style.display= 'flex'
})
} 

// click animation that resizes the textbox
window.addEventListener ('click', (e) => {
  if(e.target === newModules.searchUser) {
    newModules.searchUserDiv.style.width = '341.95px'
    newModules.searchUser.style.width = '340px'
    
  } else {
    
    newModules.searchUser.style.width = '270px'
    newModules.searchUserDiv.style.width = '271.95px'
  }
})

 
const repoNavLeft = document.querySelector('#repo-nav-left')
 
function appendToTopDiv () {
  const y = window.scrollY;
  if(y > 357 && newModules.navLeftId.textContent !== ""  && window.innerWidth > 765) {
    repoNavLeft.style.display = "flex"
    newModules.nestedRepoNavLeftOne.classList.remove('vanish')
    newModules.nestedRepoNavLeftOne.classList.add('show')
    newModules.nestedRepoNavLeftTwo.classList.remove('vanish')
    newModules.nestedRepoNavLeftTwo.classList.add('show')
  } else if (y < 400){
    repoNavLeft.style.display = "none"
    newModules.nestedRepoNavLeftOne.classList.add('vanish')
    newModules.nestedRepoNavLeftOne.classList.remove('show')
    newModules.nestedRepoNavLeftTwo.classList.add('vanish')
    newModules.nestedRepoNavLeftTwo.classList.remove('show')
  }
 
}
window.addEventListener('scroll', appendToTopDiv)







// Setting up the api call
const apiCall = async(theUser) => {
  
 const getData = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "token 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"
    },
    body: JSON.stringify({
        query:  `
        query getUser($name: String!) {
          user(login: $name) {
            repositories(first: 20) {
             nodes {
                name
                stargazerCount
                forkCount
                updatedAt
                primaryLanguage {
                  color
                  name
                }
              }
            }
            avatarUrl(size: 280)
            bio
            bioHTML
            name
            login
          }
        }`,
          variables: {
            name:theUser
          }
    })
  })
  const data = await getData.json();
  return data
};


// Setting up error message
function errorMessage () {  
  newModules.errorDiv.classList.remove('no-display')
}



// Executing api call function using text box value
[newModules.repoSearch, newModules.searchUser].forEach(element => {
  element.addEventListener('keydown', (eventObject) => {
    if(eventObject.code === 'Enter'){
      apiCall(eventObject.target.value).then(data => {
        console.log(data)
        newModules.errorDiv.classList.add('no-display')
      dataTest(data.data.user);
      repoDetails(data.data.user.repositories.nodes,data.data.user.name, newModules.repoName, 
        newModules.repoLanguageColour, newModules.repoLanguage, newModules.repoStars,
        newModules.repoForks, newModules.repoUpdated, newModules.nestedRightDiv, newModules.repoNav)
      })
      .catch(error => {
        errorMessage();    
      })
      eventObject.target.value = "";
    }
  })
})













