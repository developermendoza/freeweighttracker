import axios from "axios";

import {
  GET_ERRORS,
  SET_CURRENT_WEIGHT,
  WEIGHT_LOADING
} from "./types";

// Register user
export const addWeight = (weight) => dispatch => {
  console.log("weight: ", weight)
  axios.post("/api/weights/dashboard", weight)
  .then(res => dispatch({
    type: SET_CURRENT_WEIGHT,
    payload: res.data
  }))

  .catch(err => dispatch({
    type: GET_ERRORS,
    payload: err.response.data
  }));
}