import {
  SET_CURRENT_WEIGHT,
  WEIGHT_LOADING
} from "../actions/types";

const initialState = {
  loading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState, action){
  console.log("action: ", action)
  switch(action.type){
    case SET_CURRENT_WEIGHT:
      return action.payload
    case WEIGHT_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}