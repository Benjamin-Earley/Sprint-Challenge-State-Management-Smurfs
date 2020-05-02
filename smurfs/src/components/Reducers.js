import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_ERROR,
    ADD_SMURF,
    DELETE_SMURF
  } from "./Actions";
  
  export const initialState = {
    smurfArray: [
      {
        name: "",
        age: null,
        height: "",
        id: null
      }
    ],
    isLoading: false,
    error: null
  };
  
  export function reducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_SMURFS_START:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_SMURFS_SUCCESS:
        return {
          ...state,
          smurfArray: action.payload,
          isLoading: false
        };
      case FETCH_SMURFS_ERROR:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
      case ADD_SMURF: //start, success, error
        return {
          ...state,
          smurfArray: action.payload
        };
      case DELETE_SMURF: //start, success, error
        return {
          ...state,
          smurfArray: action.payload,
          isLoading: false
        };
      default:
        return state;
    }
  }