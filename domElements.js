// Elements updated through id
const [searchUser, userAvatar, userName, userLogin, 
  userBio, repoNavImage, navLeftId, repoCount, 
  topNavDiv, searchUserDiv, header, bodyBlockRight, 
  errorDiv, repoSearch, nestedRepoNavLeftOne, 
  nestedRepoNavLeftTwo, mainRepoNav] = 
["search-user", "user-avatar", "user-name", "user-login", "user-bio", 
"repo-nav-left-image", "nested-div-repo-nav-left-1",
"nested-repo-count-display-div", "top-nav-div", "search-user-div",
 "header", "body-block-right", "error-div", "repo-search", "nested-repo-nav-left-1", "nested-repo-nav-left-2", "repo-nav"].map(em => 
  document.getElementById(em)
)

//Arrays of elements updated through class names
const [repoName, repoLanguageColour, repoLanguage, repoStar, 
  repoStars, repoFork, repoForks, repoUpdated, 
  nestedRightDiv, repoNav] =
[".repo-name", ".repo-language-colour", ".repo-language", ".repo-star", 
".repo-stars", ".repo-fork", ".repo-forks", ".repo-update", 
".nested-body-block-right", ".repo-nav-div"].map(em =>
    document.querySelectorAll(em)
)


export {repoName, repoLanguageColour, repoLanguage, 
  repoStar, repoStars, repoFork, repoForks, repoUpdated, 
  nestedRightDiv, repoNav}

export {searchUser, userAvatar, userName, 
  userLogin, userBio, repoNavImage, navLeftId, 
  repoCount, topNavDiv, searchUserDiv, header, 
  bodyBlockRight, errorDiv, repoSearch, 
  nestedRepoNavLeftOne, nestedRepoNavLeftTwo, mainRepoNav}
