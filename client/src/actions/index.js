import { AUTH_USER, AUTH_ERROR, FETCH_USER, USER_ERROR } from "./types";
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



export const signout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: ''
  };
};






