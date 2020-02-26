import { combineReducers } from 'redux';
import authReducer from './authReducer';
import questionReducer from './questionReducer';

export default combineReducers({
  auth: authReducer,
  question: questionReducer
});
