import {
  SET_CURRENT_WEIGHT,
<<<<<<< HEAD
  GET_WEIGHTS,
  DELETE_WEIGHT,
  DELETE_ALL_WEIGHTS
=======
  CLEAR_WEIGHT_DATA,
  GET_WEIGHTS,
  DELETE_WEIGHT
>>>>>>> DeleteWeight
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
    case DELETE_ALL_WEIGHTS: 
      return {
        weightList: []
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
<<<<<<< HEAD
=======
    case CLEAR_WEIGHT_DATA:
        return{}
>>>>>>> DeleteWeight
    default:
      return state;
  }
}