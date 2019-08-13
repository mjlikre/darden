import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';


import auth from './auth';
import fetchUserReducer from "./fetchUserReducer";

export default combineReducers({
  auth,
  fetchUserReducer,
  form
});