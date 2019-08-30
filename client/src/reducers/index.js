import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';


import auth from './auth';
import fetchUserReducer from "./fetchUserReducer";
import profileReducer from "./profileReducer";
import adminReducer from "./adminReducer";
import statusChange from "./statusChange";

export default combineReducers({
  auth,
  fetchUserReducer,
  profileReducer,
  adminReducer,
  statusChange,
  form

});