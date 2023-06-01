import { types, logintypes } from "./types";

const {ADD_REMOVE_FAVS} = types;
const {USER_LOGIN} = logintypes

const initialState = {
  token: null,
  //userEmail: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
};

export default authReducer;