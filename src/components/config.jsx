
//Here i Have configure base path of the API url
const BASE_URL = "https://api.github.com";



//To get all gist list by username
const getAllGistUrl = (username) => {
  return `${BASE_URL}/users/${username}/gists`;
};

//To get single gist url
const getSingleGistUrl = (gistId) => {
  return `${BASE_URL}/gists${gistId}`;
};


//exporting to other files
export {getAllGistUrl, getSingleGistUrl};
