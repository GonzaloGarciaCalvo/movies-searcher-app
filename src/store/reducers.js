// import { logintypes, favsTypes, discoverTypes } from "./types";

// const {USER_LOGIN, USER_LOGOUT} = logintypes
// const {ADDTOFAVS, REMOVEFROMFAVS, RESETFAVS} = favsTypes
// const { GET_DiSCOVERY_LIST} = discoverTypes

// const initialState = {
//   token: null,
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case USER_LOGIN:
//       return {
//         ...state,
//         token: action.token
//       };
//     case USER_LOGOUT:
//       return {
//         ...state, token:null
//     }; 
//     default:
//       return state;
//   }
// };


// const favsInitialState = {
//   favorites:  []
// }

// const favsReducer = (state = favsInitialState, action) => {
//   const movie = action.payload?.movie

//   switch (action.type) {
//     case ADDTOFAVS:
//       let movieIsInArrayAdd = state.favorites.find(oneMovie => oneMovie.id === movie.id);
//       if (!movieIsInArrayAdd) {
//         movie.isFav=true
//       } 
//       return {
//         ...state, favorites:[...state.favorites, movie]
//       }
//       case REMOVEFROMFAVS:
//         let movieIsInArray = state.favorites.find(oneMovie => oneMovie.id === movie.id);
//         if (movieIsInArray) { 
//         let moviesLeft = state.favorites.filter(oneMovie => oneMovie.id !== movie.id)
//         movie.isFav=true
//         return {...state, favorites: moviesLeft }
//         }
//       case RESETFAVS: 
//       return{
//         ...state, favorites:[]
//       }
//     default:
//       return state;
//     }
//   }

//   const initialDiscoverystate = {
//     movies: []
//   }

//   const discoveryReducer = (state=initialDiscoverystate, action) => {
//     function addIsFavKeyToData() {
//             const favorites = action.favoritesRedux
//             const moviesCompare = action.dataMovies
//             if (favorites === null) {
//               for(let item of moviesCompare) { 
//                   item.isFav=false
//                 }
//             }
//             if (favorites !== null) {
//               for(let item of moviesCompare) { 
//                 const checkIfIsInFavs =  favorites.find(fav => fav.id == item.id)
//                 // are diferent types, string and number, so not using ===
//                 if (checkIfIsInFavs) {
//                   item.isFav=true
//                 } else {
//                   item.isFav=false
//                 }
//               }
//             }
//             return moviesCompare
//           }
//     switch (action.type) {
//       case GET_DiSCOVERY_LIST:       
        
//         const dataProsesed = addIsFavKeyToData()
//         return {
//           ...state, movies:dataProsesed
//         }
//       default:
//         return state;
//     }
//   }

// export { authReducer, favsReducer, discoveryReducer };