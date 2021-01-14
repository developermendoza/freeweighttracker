import {
  SET_CURRENT_WEIGHT,
  CLEAR_WEIGHT_DATA,
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
  console.log("WEIGHT REDUCER")
  console.log("action.payload: ", action)
  console.log("state.weightList: ", state)
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
    case CLEAR_WEIGHT_DATA:
        return{}
    default:
      return state;
  }
}