import {
  SET_CURRENT_WEIGHT,
  GET_WEIGHTS,
  DELETE_WEIGHT
} from "../actions/types";

const initialState = {
  weightList: [],
  newWeight: {},
  weight_id: ""
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
    case DELETE_WEIGHT:
        return {
          weightList: state.weightList.filter(function(weight) { return weight._id !==action.payload; }),
          weight_id: action.payload
        }
    default:
      return state;
  }
}