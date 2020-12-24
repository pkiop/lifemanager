import { combineReducers } from 'redux';
import user from './user';
import timeRecode from './timeRecode';

const rootReducer = combineReducers({
  user, timeRecode,
});

export default rootReducer;
