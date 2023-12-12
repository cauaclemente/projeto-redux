import UserActionTypes from "./action-types";

const initialState = {
  currentUser: null,   // isso significa que quando começar o login fica zero
};

const useReducer = (state = initialState, action ) => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return {...state, currentUser: action.playload };
    case UserActionTypes.LOGOUT:
      return {...state, currentUser: null}
    default:
      return state
  }
}

export default useReducer;
