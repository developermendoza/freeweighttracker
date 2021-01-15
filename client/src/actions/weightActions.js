import axios from "axios";
// import { response } from "express";

import {
  GET_ERRORS,
  SET_CURRENT_WEIGHT,
  LOADING,
  CLEAR_ERRORS,
  STOP_LOADING,
  GET_WEIGHTS,
  DELETE_WEIGHT,
  DELETE_ALL_WEIGHTS
} from "./types";

export const getWeights = (id) => dispatch => {
  axios.get("/api/weights/get-weights?id="+id)
  
  .then(res => {
    dispatch({
      type: GET_WEIGHTS,
      payload: res.data
    });
    dispatch({
      type: STOP_LOADING,
    });
  }
  
  ).catch(err => {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });

    dispatch({
      type: STOP_LOADING,
    });
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
      type: STOP_LOADING,
    });
  });
}

export const deleteWeight = (id) => dispatch => {
  axios.delete("/api/weights/delete-weight",{ data: { id } })
  .then( res => {
    dispatch({
      type: DELETE_WEIGHT,
      payload: id
    });
  }).catch( err => {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  })
}

export const deleteAllWeights = (id) => dispatch => {
  console.log(id)
  dispatch({
    type: DELETE_ALL_WEIGHTS,
    payload: id
  })
}


export const loadingData = () => dispatch => {
  dispatch({
    type: LOADING
  })
}
