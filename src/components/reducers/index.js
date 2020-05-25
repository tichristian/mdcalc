import { combineReducers } from 'redux';
import Profile from './ProfileReducer';

export default combineReducers({
  profile: Profile
});
