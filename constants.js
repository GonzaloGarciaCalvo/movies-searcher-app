const LIST_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.vite_API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
const emailRegEx = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm) ;
const passwordRegEx = new RegExp( /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/);

export {LIST_URL, emailRegEx, passwordRegEx}