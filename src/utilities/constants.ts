const LIST_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.vite_API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
const emailRegEx = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm) ;
const passwordRegEx = new RegExp( /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/);
const baseUrl = 'https://api.themoviedb.org'
const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`;
const MOVIES_BY_GENRE_URL = `https://api.themoviedb.org/3/discover/movie?&api_key=${import.meta.env.VITE_API_KEY}&with_genres=`
export {LIST_URL, emailRegEx, passwordRegEx, baseUrl, GENRES_URL, MOVIES_BY_GENRE_URL}