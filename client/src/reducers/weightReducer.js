import {
  SET_CURRENT_WEIGHT,
  CLEAR_WEIGHT_DATA,
  GET_WEIGHTS
} from "../actions/types";

const initialState = {
  weightList: [],
  newWeight: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState, action){
  switch(action.type){
    case SET_CURRENT_WEIGHT:
      return {
        weightList : [action.payload, ...state.weightList],
        newWeight: action.payload
      }
    case GET_WEIGHTS:
        return {
          ...state,
          weightList: action.payload
        } 
    case CLEAR_WEIGHT_DATA:
        return{}
    default:
      return state;
  }
}