import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';


import auth from './auth';
import fetchUserReducer from "./fetchUserReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  auth,
  fetchUserReducer,
  profileReducer,
  form

});