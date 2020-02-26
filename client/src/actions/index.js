import axios from 'axios';
import { FETCH_USER, FETCH_QUESTIONS } from './type';

export const fetchUser = () => async dispatch => {
  try {
    const user = await axios.get('/api/v1/users/current');

    console.log(user);
    dispatch({
      type: FETCH_USER,
      payload: user
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
