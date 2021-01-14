import axios from "axios";

import {
  GET_ERRORS,
  SET_CURRENT_WEIGHT,
  LOADING,
  CLEAR_ERRORS,
  STOP_LOADING,
  CLEAR_WEIGHT_DATA,
  GET_WEIGHTS
} from "./types";

export const getWeights = (id) => dispatch => {
  axios.get("/api/weights/get-weights?id="+id)
  .then(res => {
    dispatch({
      type: GET_WEIGHTS,
      payload: res.data
    })
  }
  
  ).catch(err => {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  })
}


export const addWeight = (weight) => dispatch => {
  axios.post("/api/weights/add-weight", weight)
  .then(res => {
   
    dispatch({
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