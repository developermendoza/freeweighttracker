import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";

// Register user
export const registerUser = (userData,history) => dispatch => {
  axios.post("/api/users/register", userData)
  .then(res => history.push("/login"))
  .catch(err => dispatch({
    type: GET_ERRORS,
    payload: err.response.data
  }))
}

// Login get user token
export const loginUser = userData => dispatch => {
  console.log("userData: ", userData)
  axios.post("/api/users/login", userData)
  .then(res => {
    // save to localStorage
    // set token to localStorage
    const { token } = res.data;
    localStorage.setItem("jwtToken", token);
    // set token to Auth header
    setAuthToken(token);
    // Decoded token to get user data
    const decoded = jwt_decode(token);
    // dispatches this action to the function below
    dispatch(setCurrentUser(decoded));
  })
  .catch(err => dispatch({
    type: GET_ERRORS,
    payload: err.response.data
  }))
}

// set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

// User loading
export const setUserLoading = decoded => {
  return {
    type: USER_LOADING
  }
}

// log out user
export const logoutUser = () => dispatch => {
// remove token from local storage
  localStorage.removeItem("jwtToken");
// remove auth header for future requests
  setAuthToken(false);
// set current user to empty object which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
}