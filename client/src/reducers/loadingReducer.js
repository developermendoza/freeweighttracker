import {
  LOADING,
  STOP_LOADING,
} from "../actions/types";

const initialState = {
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState, action){
  switch(action.type){
    case LOADING:
      return true
      case STOP_LOADING:
        return false
    default:
      return state;
  }
}