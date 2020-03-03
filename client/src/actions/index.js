import axios from 'axios';
import {
  FETCH_USER,
  FETCH_QUESTIONS,
  LOGIN,
  SIGNUP,
  LOGOUT,
  GET_ERROR,
  CLEAR_ERROR
} from './type';

export const fetchUser = () => async dispatch => {
  try {
    const response = await axios.get('/api/v1/users/current');
    const user = response.data;

    dispatch({
      type: FETCH_USER,
      payload: user
    });
  } catch (err) {
    console.log(err);
  }
};

const postUser = (url, data, type) => async dispatch => {
  try {
    let user = null;

    const response = await axios.post(url, data);
    if (response.data.status === 'success') user = response.data.data.user;

    dispatch({
      type,
      payload: user
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data.message
    });
  }
};

export const signup = details =>
  postUser('/api/v1/users/signup', details, SIGNUP);

export const login = credentials =>
  postUser('api/v1/users/login', credentials, LOGIN);

export const logout = () => async dispatch => {
  try {
    await axios.get('/api/v1/users/logout');
    dispatch({
      type: LOGOUT,
      payload: false
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchQuestions = () => async dispatch => {
  try {
    const questions = await axios.get('/api/v1/questions');

    dispatch({
      type: FETCH_QUESTIONS,
      payload: questions
    });
  } catch (err) {
    console.log(err);
  }
};

export const clearError = () => {
  return { type: CLEAR_ERROR, payload: null };
};
