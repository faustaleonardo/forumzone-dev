import axios from 'axios';
import { FETCH_USER } from './type';

export const fetchUser = () => async dispatch => {
  try {
    const questions = await axios.get('/api/v1/users/me');

    dispatch({
      type: FETCH_USER,
      payload: questions
    });
  } catch (err) {
    console.log(err);
  }
};
