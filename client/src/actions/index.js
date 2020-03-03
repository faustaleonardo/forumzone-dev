import axios from 'axios';
import { FETCH_USER, FETCH_QUESTIONS, LOGIN, LOGOUT } from './type';

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

export const login = credentials => async dispatch => {
  try {
    let user = null;

    const response = await axios.post('/api/v1/users/login', credentials);
    if (response.data.status === 'success') user = response.data.data.user;

    dispatch({
      type: LOGIN,
      payload: user
    });
  } catch (err) {
    console.log(err);
  }
};

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
