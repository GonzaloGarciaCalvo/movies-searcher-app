const API_KEY = '94d0614843604144a1a4f42fb996dfe2'
const AUTH_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGQwNjE0ODQzNjA0MTQ0YTFhNGY0MmZiOTk2ZGZlMiIsInN1YiI6IjY0NjdkYWUxZDE4NTcyMDBlNWEzOGY5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pCUXd8GVHXLUcQW4JzgK8WVFhI1e15XiVyrN1fAi75k'
const LIST_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
const emailRegEx = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm) ;
const passwordRegEx = new RegExp( /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/);
//https://api.themoviedb.org/3/account/?api_key=94d0614843604144a1a4f42fb996dfe2/lists
/* regEx = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
regEx2 =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; */

export {API_KEY, AUTH_KEY, LIST_URL, emailRegEx, passwordRegEx}