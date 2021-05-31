// Setting the text content of repo description elements
import{repoName, repoLanguageColour, repoLanguage, repoStar, repoStars, 
  repoFork, repoForks, repoUpdated, nestedRightDiv, repoNav} from './domElements.js'

import {searchUser, userAvatar, userName, userLogin, userBio, 
  repoNavImage, navLeftId, repoCount, topNavDiv, searchUserDiv, header} from './domElements.js'  

export function repoDetails (array, reposArray, languageColourArray, languagesArray,
    starsArray, forksArray, updatesArray, ParentDivArray, 
    repoNavArray) {
  array.forEach((rn, idx) => {
    reposArray[idx].textContent = rn.name;
    languageColourArray[idx].style.backgroundColor = rn.primaryLanguage.color
    languagesArray[idx].textContent = rn.primaryLanguage.name;
    starsArray[idx].textContent = rn.stargazerCount;
    forksArray[idx].textContent = rn.forkCount;
    updatesArray[idx].textContent = rn.updatedAt
    reposArray[idx].setAttribute('href', `https://github.com/${theUser}/${reposArray[idx].textContent}`)
    ParentDivArray[idx].classList.remove('no-display')    
  })
  repoNavArray.forEach(repo => {
    repo.style.display= 'flex'
  })
} 

// Setting the text content of the user details block

export function dataTest (data) {
  const {avatarUrl, bio, bioHtml, login, name, repositories} = data
  userAvatar.setAttribute('src',avatarUrl);
  repoNavImage.setAttribute('src',avatarUrl);
  userName.textContent = name;
  userLogin.textContent = login;
  navLeftId.textContent = login;
  userBio.textContent = bio;
  repoCount.textContent = `${repositories.nodes.length} repos found`
}

//export {dataTest, repoDetails}


// const allLinks = document.querySelectorAll('.repo-nav-div')
// allLinks.forEach(h => {
//     h.addEventListener('mouseover', () => {h.classList.add('repo-nav-div-hover')})
//     h.addEventListener('mouseout', () => {h.classList.remove('repo-nav-div-hover')})
// });
