import {
  SET_CURRENT_WEIGHT,
  CLEAR_WEIGHT_DATA
} from "../actions/types";

const initialState = {}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState, action){
  switch(action.type){
    case SET_CURRENT_WEIGHT:
      return(action.payload)
      case CLEAR_WEIGHT_DATA:
        return{}
    default:
      return state;
  }
}