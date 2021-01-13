import axios from "axios";

import {
  GET_ERRORS,
  SET_CURRENT_WEIGHT,
  LOADING,
  CLEAR_ERRORS,
  STOP_LOADING,
  CLEAR_WEIGHT_DATA,
} from "./types";

// Register user
export const addWeight = (weight) => dispatch => {
  axios.post("/api/weights/dashboard", weight)
  .then(res => {
   
    dispatch(
    {
      type: SET_CURRENT_WEIGHT,
      payload: res.data
    });
 
    dispatch({
      type: CLEAR_ERRORS,
    })
    dispatch({
      type: STOP_LOADING
    });
  })

  .catch(err => {

    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });

    dispatch({
      type: CLEAR_WEIGHT_DATA
    });

    dispatch({
      type: STOP_LOADING,
    });
  });
}

export const loadingData = () => dispatch => {
  dispatch({
    type: LOADING
  })
}