import {
  AUTH_USER,
  AUTH_ERROR,
  FETCH_USER,
  USER_ERROR,
  USER_PROFILE,
  USER_PROFILE_ERROR,
  FETCH_USER_PROFILE_ERROR,
  FETCH_USER_PROFILE,
  CHANGE_STATUS_ONE,
  CHANGE_STATUS_ONE_ERROR,
  CHANGE_STATUS_TWO,
  CHANGE_STATUS_TWO_ERROR,
  ADMIN_APPROVE,
  ADMIN_APPROVE_ERROR,
  ADMIN_REJECT,
  ADMIN_REJECT_ERROR,
  ADMIN_RESTART,
  ADMIN_RESTART_ERROR,
  MATCH,
  MATCH_ERROR,
  ADMIN,
  ADMIN_ERROR
} from "./types";
import axios from 'axios';



export const signup = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/signup', formProps);
    dispatch({ type: AUTH_USER, payload: res.data.token });
    localStorage.setItem('token', res.data.token);
    callback();
  } catch(e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};
export const signin = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/signin', formProps);
    dispatch({ type: AUTH_USER, payload: res.data.token });
    localStorage.setItem('token', res.data.token);
    callback();
  } catch(e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

export const fetchUser = () => async dispatch => {
  console.log("hey")
  try {
    const response = await axios.get('/api/user', {
      headers: { authorization: localStorage.getItem('token')}
    });

    dispatch({ type: FETCH_USER, payload: response.data.user });
  } catch(e) {
    dispatch({ type: USER_ERROR, payload: 'Something bad happened' });
  }
}
export const makeUserProfile = data => async dispatch => {
  console.log("hey, this is "+ data)
  try {
    await axios.post('/api/user/profile', data)
    const profile = await axios.post('/api/user/fetchprofile', data.id)
    dispatch({ type: USER_PROFILE, payload: profile.data})
  } catch(e){
    dispatch({ type: USER_PROFILE_ERROR, payload: 'something is wrong'})
  }

}
export const getUserProfiles = () => async dispatch => {
  try {
    const profiles = await axios.get('/api/user/fetchprofiles')
    dispatch({ type: FETCH_USER_PROFILE, payload: profiles.data})
  } catch(e) {
    dispatch({type: FETCH_USER_PROFILE_ERROR, payload: "error happened"})
  }

}
export const changeStatusOne = data => async dispatch => {
  try {
    console.log(data)
    const statusOne = await axios.put('/api/user/changestatusone', data)
    dispatch({ type: CHANGE_STATUS_ONE, payload: statusOne })
  } catch(e) {
    dispatch({ type: CHANGE_STATUS_ONE_ERROR, payload: "couldn't process request"})
  }
}
export const changeStatusTwo = data => async dispatch =>{
  try {
    await axios.put('/api/user/changestatustwo', data)
    dispatch({ type: CHANGE_STATUS_TWO, payload: 'success'})
  }catch(e){
    dispatch({ type: CHANGE_STATUS_TWO_ERROR, payload: "couldn't process request"})
  }
}
export const approved = data => async dispatch =>{
  try {
    await axios.put('api/user/approve', data)
    dispatch({ type: ADMIN_APPROVE, payload : 'success'})
  }catch(e){
    dispatch({ type: ADMIN_APPROVE_ERROR, payload: "couldn't process request"})
  }
}
export const rejected = data => async dispatch =>{
  try {
    await axios.put('api/user/reject', data)
    dispatch({ type: ADMIN_REJECT, payload : 'success'})
  }catch(e){
    dispatch({ type: ADMIN_REJECT_ERROR, payload: "couldn't process request"})
  }
}
export const restart = data => async dispatch =>{
  try {
    await axios.put('api/user/restart', data)
    dispatch({ type: ADMIN_RESTART, payload : 'success'})
  }catch(e){
    dispatch({ type: ADMIN_RESTART_ERROR, payload: "couldn't process request"})
  }
}
export const match = data => async dispatch =>{
  try{
    const matched = await axios.post('api/services/match', data)
    dispatch({ type: MATCH, payload: matched.data})
  }catch(e){
    dispatch({ type: MATCH_ERROR, payload: "couldn't process request"})

  }
}

export const adminSignIn = data => async dispatch =>{
  try{
    const admin = await axios.get('api/admin/signin', {params:{id: data.id}})
    dispatch({ type: ADMIN, payload: admin})
  }catch(e){
    dispatch({ type: ADMIN_ERROR, payload: "not an admin"})
  }
}

export const signout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: ''
  };
};






